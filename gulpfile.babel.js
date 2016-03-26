
import requireDir from 'require-dir'

// PRELOAD ALL TASKS
// =============================================================================
// you can execute individual tasks as `gulp <taskName>`
// WARNING: don't load recursively (omit `_disabled` tasks)

requireDir('./tasks', { recurse: false });
