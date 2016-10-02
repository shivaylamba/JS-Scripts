/**
  * Core script to handle plugins/commands
  * Not to be edited until script engine exists in C++ section of the Project
  *
  * Script Engine Variable Will be "sys", Example
  *    - sys.tellUser(this.name, "You are unable to talk due to mute by the server");
  * Or to ban someone with the scripts.
  *    - sys.banUser(user);
  *    - sys.banUser(user, time);
  *
  * Please be patient with us, Thanks
**/

// ScriptEngine is a global from the server.

/* global ScriptEngine */

// name because undefined and scriptengine would need it.
var name;
var sys = ScriptEngine(name = "");

// Do whatever now that sys is defined
