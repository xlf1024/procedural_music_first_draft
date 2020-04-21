# procedural_music_first_draft

Preparing some experiments with procedural music assembly.
Basic idea is to have recorded melody segments which are assembled based on rules.

This draft is based on a piece I wrote some years ago, which basically worked that way, except the assembly of the segments was done manually in the sheet music. See [2_Partitur_3c.mscz](/2_Partitur_3c.mscz) (MuseScore) or [2_Partitur_3c.pdf](/2_Partitur_3c.pdf) for sheet music. Also, for reference, there is MuseScore's generated version of the original piece available in [2_Partitur_3c.flac](/2_Partitur_3c.flac]).

For getting started with procedural assembly, I split that piece into its segments - see [Partitur_3_segments.mscz](/Partitur_3_segments.mscz) (MuseScore) or [Partitur_3_segments.pdf](/Partitur_3_segments.pdf) - and rendered each segment (voice) to flac in MuseScore. A final project would have actual recordings instead. Audio file length is 5 measures as the longest segments are 4 segments, but I need to leave some time to include reverb etc. Of course e.g. the A_ segments, which are only one measure each, could/should use shorter files, but it was easier this way.

Currently, no procedural generation is used; instead I hardcoded the arrangement I used in the original piece. This serves for testing the playback process, its synchronicity and thus feasibility of the whole project.

---

Try it here: https://xlf1024.github.io/procedural_music_first_draft/draft.html

Segments are shown when they get scheduled, also you can change how often (interval) and how far ahead (plan_ahead) audio segments are scheduled. If you want to use smaller or more precise values than the inputs allow, overwrite them in Devtools (`interval` and `plan_ahead`) For details on these options, and why scheduling is needed at all, see https://www.html5rocks.com/en/tutorials/audio/scheduling/
If you experiment with these values, switch tabs and do other stuff in between, because javascript timeouts and intervals get stretched in invisible tabs.

---

TODO:

- create a system to efficiently describe the logic for dynamic assembly, so that the phases of the piece can grow longer and shorter, with e.g. the transition near the end depending on an external trigger. Probably involves a domain specific language for authoring

  Should I stick to the concept of measures?
pro: probably allows for shorter syntax and simpler scheduling logic
con: inflexible for tempo or time signature changes

- find a solution for long notes with variable length like the bass note near the end
