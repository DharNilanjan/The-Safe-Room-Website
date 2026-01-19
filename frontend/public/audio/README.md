# Audio Files Directory

Place your podcast episode audio files (.mp3, .wav, .m4a) in this directory.

## File Naming Convention

Use a clear naming convention for your audio files:
- `episode-1.mp3`
- `episode-2.mp3`
- `episode-3.mp3`
etc.

## Supported Formats

The HTML5 audio player supports:
- MP3 (recommended for best compatibility)
- WAV
- M4A
- OGG

## File Size Recommendations

- Aim for 64-128 kbps for speech-only content
- Use 128-192 kbps for music or high-quality audio
- Consider hosting large files on a CDN for better performance

## Usage

After adding your audio files here, update the episode URLs in:
`/src/app/episodes/page.tsx`

Example:
```typescript
{
  id: "1",
  title: "Episode Title",
  audioUrl: "/audio/episode-1.mp3", // Update this path
  // ... other fields
}
```

## Note

This directory is empty by default. Add your actual podcast audio files to make the players functional.
