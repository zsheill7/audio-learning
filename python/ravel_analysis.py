import numpy as np
import librosa

# Load example clip
y, sr = librosa.load(librosa.util.example_audio_file())

# hop length
hop_length = 512

# separate harmonics and percussives
y_harmonic, y_percussive = librosa.effects.hpss(y)

tempo, beat_frames = librosa.beat.beat_track(y=y_percussive, sr=sr)

#MFCC features from raw signal
mfcc = librosa.feature.mfcc(y=y, sr=sr, hop_length=hop_length, n_mfcc=13)

#first-order differences
mfcc_delta = librosa.feature.delta(mfcc)

beat_mfcc_delta = librosa.util.sync(np.vstack([mfcc, mfcc_delta]), beat_frames)

# chroma features
chromagram = librosa.feature.chroma_cqt(y=y_harmonic, sr=sr)

beat_chroma = librosa.util.sync(chromagram, beat_frames, aggregate=np.median)

beat_features = np.vstack([beat_chroma, beat_mfcc_delta])