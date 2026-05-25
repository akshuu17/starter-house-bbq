import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const charcoalIntervalRef = useRef<number | null>(null);
  const mainGainNodeRef = useRef<GainNode | null>(null);

  // Generate a white noise buffer for sizzling
  const createNoiseBuffer = (ctx: AudioContext) => {
    const bufferSize = ctx.sampleRate * 2; // 2 seconds of noise
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  };

  const startSynthesizer = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master output gain
      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0, ctx.currentTime);
      mainGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 1.5); // Smooth fade-in
      mainGain.connect(ctx.destination);
      mainGainNodeRef.current = mainGain;

      // --- SIZZLE SOURCE ---
      const noiseBuffer = createNoiseBuffer(ctx);
      const sizzleSource = ctx.createBufferSource();
      sizzleSource.buffer = noiseBuffer;
      sizzleSource.loop = true;

      // Filter to shape sizzle (high-pass above 2.5kHz)
      const sizzleFilter = ctx.createBiquadFilter();
      sizzleFilter.type = 'highpass';
      sizzleFilter.frequency.setValueAtTime(2500, ctx.currentTime);
      sizzleFilter.Q.setValueAtTime(1, ctx.currentTime);

      // Lowpass filter to smooth it down a bit
      const sizzleLowpass = ctx.createBiquadFilter();
      sizzleLowpass.type = 'lowpass';
      sizzleLowpass.frequency.setValueAtTime(9000, ctx.currentTime);

      // Gain node for sizzle amplitude modulation (bubbling effect)
      const sizzleGain = ctx.createGain();
      sizzleGain.gain.setValueAtTime(0.08, ctx.currentTime);

      // Bubbling Modulation LFO (sizzling fat bubbles)
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(7.5, ctx.currentTime); // 7.5Hz

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.03, ctx.currentTime);

      // Connect LFO modulation
      lfo.connect(lfoGain);
      lfoGain.connect(sizzleGain.gain);
      lfo.start();

      // Connect sizzle signal chain
      sizzleSource.connect(sizzleFilter);
      sizzleFilter.connect(sizzleLowpass);
      sizzleLowpass.connect(sizzleGain);
      sizzleGain.connect(mainGain);
      sizzleSource.start();

      // --- CHARCOAL CRACKLE (Wood Fire Pop) ---
      const firePopFilter = ctx.createBiquadFilter();
      firePopFilter.type = 'bandpass';
      firePopFilter.frequency.setValueAtTime(1500, ctx.currentTime);
      firePopFilter.Q.setValueAtTime(6.0, ctx.currentTime);
      firePopFilter.connect(mainGain);

      const triggerPop = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = audioCtxRef.current.currentTime;

        // Create short clicking envelope
        const osc = audioCtxRef.current.createOscillator();
        const gainNode = audioCtxRef.current.createGain();
        
        // Randomize pop frequency (wooden snaps and charcoal explosions)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200 + Math.random() * 1200, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.015 + Math.random() * 0.035, now + 0.001);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.02 + Math.random() * 0.05);

        osc.connect(gainNode);
        gainNode.connect(firePopFilter);
        
        osc.start(now);
        osc.stop(now + 0.1);
      };

      // Fire random pops periodically
      const runPopLoop = () => {
        triggerPop();
        const nextPopMs = 80 + Math.random() * 450;
        charcoalIntervalRef.current = window.setTimeout(runPopLoop, nextPopMs);
      };
      runPopLoop();

      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to initialize Web Audio API sizzler:', error);
    }
  };

  const stopSynthesizer = () => {
    if (charcoalIntervalRef.current) {
      clearTimeout(charcoalIntervalRef.current);
      charcoalIntervalRef.current = null;
    }

    if (mainGainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      mainGainNodeRef.current.gain.setValueAtTime(mainGainNodeRef.current.gain.value, ctx.currentTime);
      mainGainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5); // smooth fade out
      
      setTimeout(() => {
        if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
          audioCtxRef.current.close();
        }
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 600);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSynthesizer();
    } else {
      startSynthesizer();
    }
  };

  useEffect(() => {
    return () => {
      if (charcoalIntervalRef.current) {
        clearTimeout(charcoalIntervalRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 p-4 rounded-full glass-panel-heavy hover:scale-110 active:scale-95 transition-all duration-300 group shadow-neon-orange ${
        isPlaying ? 'border-brand-orange text-brand-orange bg-brand-black/90' : 'text-gray-400 border-white/10 hover:border-brand-orange hover:text-brand-orange'
      }`}
      aria-label="Toggle Sizzling Charcoal Sound"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {isPlaying ? (
          <>
            <Volume2 className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow"></span>
            </span>
          </>
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-semibold whitespace-nowrap tracking-wide select-none">
        {isPlaying ? 'SIZZLING LIVE' : 'PLAY GRILL SOUND'}
      </span>
    </button>
  );
};
