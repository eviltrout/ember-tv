Platform History
 - The Internet is technically older than me, however I would argue that it only got really interesting in the 90s.
 - That was the time when everyday people, like those in this room, started connecting our home computers together.
 - I feel special, because there can only be one point in a civilization's history they connect everything together,
   and I lived through it!

Platform History II
 - Packet Switching was the technology that allowed it all to happen.
 - Previously networking was application specific, which is much less useful
 - The network doesn't care what you're sending, just get it from point A to B.

Platform History III
 - The Internet didn't care which platform you were on, whether it's a Mainframe UNIX system, desktop
   Windows or even a C64
 - If you had a client application and a TCP/IP stack, you could participate.
 - The universality of applications exploded.

Platform History IV
 - There was still a major problem though; applications had to be written again and again for each
   platform
 - We have some novel solutions to this, like portable C code, and scripting languages
 - Most applications are *still* written this way, distributed as source or recompiled binaries

The Dream
 - The Dream is to make applications as universal as the networks they run on.
 - Update them instantly, write once, run anywhere.
 - We called this dream Java.

The Dream II
 - Java was so scary that Microsoft violated antitrust laws to squash it.
 - Ultimately, it succeeded in the server space, with a few exceptions (like one of biggest games of all time)
 - Forunately, there was another...

Javascript
 - Sometimes we don't get the hero we needed but the one we deserved.
 - Javascript might be a toad covered in warts, but it has evolved into the dream
 - I think that makes everyone in this room special, because like there can only be one time in a civilization's
   history when you connect all the computers together, there can only be one time when you allow them to
   run the exact same software, instantly.

A Tirade about SPAs
 - I dislike the term single page application
 - It's like calling a car a horseless carriage, it's describing the new using the thoughts of the old.
 - I prefer the term "Browser Application".

What is a Browser Application?
 - The major one is it runs in a browser, obviously.
 - It is based on a DOM
 - It uses Javascript (or some language that compiles into JS)

An aside: History Repeating Itself
 - Did you know people many were against packet switching networks? While they were 3-100x more efficient
   you needed processing power and storage on both ends (http://www.packet.cc/files/ev-packet-sw.html)
 - Today, some are against Browser Applications, preferring old school "page based" server side
   rendering. Let the server do all the work, and "sprinkle" in functionality.
 - Nobody can predict the future, but it seems smart to me to bet on the more flexible and generalized
   technology rather than the specific.

What kind of app do you think of when I say Browser Application
 - Was it just like an old school application, but built in Ember instead?
 - That's OK, but think bigger. What kind of applications and interfaces previously weren't possible?
 - Let's build more of those!

Some Types Browser Applications
 - Social: (Gmail, Slack.io, Discourse)
 - Games: (A dark room, 2048)
 - Video: (Vine, Twitch)
 - Creative: (Atom.io)

Browsers are Everywhere
 - Desktop
 - Mobile, Tablets
 - TVs
 - Wearable Computing

The theory
 - Ember is a great platform for writing browser applications
 - TVs can run web browsers
 - Ember should be great for writing an application that runs on a TV

Can it run?
 - Most laptops and desktops hook up to TVs with one cable. Or you can go cheaper and get
   a Chromecast.
 - We can load our app by pointing the web browser at a URL
 - We can handle remote control input because it is mapped to the keyboard

How are current TV applications made now?
 - Most are native and compiled for each platform
 - Different platforms can have different versions of the software
 - Try Youtube on a Roku versus a web browser for example.

Advantage I: The Refresh Test
 - URL is the serialized state of your application
 - If you refresh the page, or restart you should go back to where you left off.
 - No media browsing app I've used does this, presumably because tracking application state is hard
 - In ember we get it for free!

Advantage II: CSS Makes Styling Easy
 - Let's look at the source code to XBMC, a popular app for playing media
 - It allows theming, but has its own XML format to do this. Every developer who changes
   the UX has to learn this very app specific, non-portable format
 - CSS has come a long way. We can do gradients and drop shadows, transformations, etc with
   just a few lines and it looks great.

Advantage III: Easy Distribution
 - App Stores have come a long way with auto-updating and stuff, but even the best App Stores
   have a worse upgrade story than you pushing a button and deploying code to a server.
 - Do you want your application's users to see something right away? You can do it. Fix an
   important bug? Why wait for Roku or Apple's approval?

Advantage IV: It can run full screen on non-TVs
 - We talked about portability before, but how cool is it that you could make your TV application
   also run on an iPad with virtually no work?
 - If you're running it on a HTPC, let anyone on your wireless network access it, no need for
   for native players and annoyances like that.

* Demo App *

How to in Ember - It's just like the other apps you build
 - ember new tv-app
 - Customize your CSS for full screen apps
 - Create routes for the appropriate states of your application

How to intercept remote commands
 - Easiest way is to just think of them as keyboard commands
 - We can use focus for elements and use CSS to style
 - But we have direction buttons, not just tabs?

Ember Components to the rescue
 - Use a base component of `RemoteTarget`
 - In `ApplicationView`, listen for keyboard events. Find the closest `RemoteTarget` in the DOM
   in the direction they clicked and focus on it.
 - Call `focus()` on that element

Build up TV widgets
 - I created `tv-button` that extended `RemoteTarget` for those buttons
 - You can use the `focusIn` event to know when you've been selected

Other fun stuff
 - Use Liquid Fire for animations
 - Use web audio for sounds when clicking on things

That's really all there is!
 - Ember made this really easy, took me no time to build this prototype
 - The source code is available on github
 - Go crazy building stuff!
