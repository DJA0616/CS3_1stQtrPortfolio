# List and describe at least 5 topics that we discussed in class that you know very well.

1. **Basic HTML tags (script, div, button, input, p, h1, etc)**
    * Areas bounded by tags (<\opening><\/closing>) can do specific things based on the tag. *<\script>* is for writing code with Javascript, *<\h1>* is a header tag, which you typically put at the top of a page, *<\input>* is for editable textboxes, and so on.
    * I understand these basic tags because I got to practice using them frequently since all our exercises used some form of them. I also understood them before when I used to use the inspector tool in the browser to edit things in webpages when I was younger.
2. **Loop Control Structures**
    * The loop control structures work much like in C++. For loops have *variable initialization*, *condition statements* to continue or stop, and statements after the loop iteration has executed (like i++). The only difference really is that variable initialization doesn't make you specify their type (so you just do let or var). While loops also work the same.
3. **Variable Declaration**
    * Variable declaration is very different from the C++ im used to. In C++, you had to specify everything since their types remained constant throughout the program lifespan. In Javascript, there's none of that. It's just *const*, *let*, and *var*. Const prohibits your variable to be reassigned outside of initialization. Let and var are very similar, but the difference is that variables declared with *let* only have a scope of the **block** they are in (inside an *if*, *for*, *while* block etc), while *var* is function-scoped, meaning it is accessible inside the entire **function** it's declared in.
4. **Javascript Operators**
    * We learned arithmetic, assignment, logical, and comparison operators. These work similar to C++. Arithmetic operators are your basic plus (+), minus (-), times (\*), and divide (/), all following the order of operations (PEMDAS). Assignment operators assign things to variables, and can have arithmetic operators come in front of them (like C++), so =, +=, -=, \*=, /=. Logical operators operate on *boolean* values (true/false), and pretty much exactly the same as C++ last year (AND &&, OR ||, NOT !). The interesting thing is comparison operators. Since Javascript doesn't really have explicity variable types, there are two different types of equal/not equal operators: *strict* and *loose*. Loose equality/inequality is given by the == and != operators, and they compare two different variables, regardless of type. On the other hand, strict equality/inequality (=== and !==) do not convert variable types (ie 42 == "42" but 42 !== "42").
5. **Markdown**
    * I already somewhat knew markdown from all my chatting on discord and reddit, so it came as a surprise to me that markdown was its own official format and not just a convention adopted by other things. Now I feel quite stupid because all the programs I've used on github for my own personal projects (usually Minecraft mods, shaders, etc, and Blender addons) all had their readmes etc in markdown, not txt, and my brain kind of filtered them out.

# List at least 5 topics that you know and can describe but needs further practice/discussion and why.

1. **CSS**
    * There's a LOT to CSS, and I've only been able to scratch the surface during this first quarter. I want to learn animation and maybe more complex ui design if I have the time (and willpower). Examples being: integrating JS into CSS more via scripts (for animation/special effects), learning how to create more complex styles, using stylesheets to standardize the look and feel of my pages, etc.
2. **Arrow functions**
    * These are confusing to me. Yes, I know they're shorthand, but I feel like I just need a bit more practice to be able to use them effectively. I already know how to use them in function expressions, and in other things like *setInterval()*, but yeah, more practice.
3. **Readline interfaces**
    *  We didn't get enough time to touch on this (we skipped straight to the Graded Exercises), and I only understand it from a base perspective of "oh it's just a way to interact with the console etc etc", so it's still confusing to me, especially with the *require* statement.
4. **Truthiness**
    * I get how truthiness works - values that are not explicitly *0*, *-0*, *NaN*, *null*, *""*, or other things that denote emptiness are regarded as "true" in a boolean sense, but it gets more complicated when combining it with things like strict equality/inequality operators or assignments and ternary operators.
5. 

# Describe on what will be your plan of action in order to help yourself in understanding further the topics listed on the second items.
* Most of my problems with the items listed in no. 2 can be solved with a little more practice. Maybe in the coming quarters, I can focus on implementing / using them in my projects. For example, I could try styling a graded exercise, or using truthy variables instead of just booleans.
* My learning style is very hands-on, I couldn't memorize everything, so if something exists that I don't use, I tend to forget about them, which is why it's important for me to practice frequently.

# In the activities that were done in class, list at least two that you think were effective and at least two that you think not effective in helping you understand topics in our course and why?
1. **Long Tests**
    * I liked doing the long tests (yes, including the objective ones), since they served as a guide for me to pay attention to certain subjects/details that I was ignoring from my CS studies.
2. **6th and 7th graded exercises**
    * I like that the editing and submission for the exercises are all in Khub, so I'm not forced to switch windows or anything. This realy helped me focus. I also like how evaluating the code shows your errors and mistakes, it saves so much time debugging.
3. **Video Lectures**
    * I don't really find video lectures effective for me in general since I usually end up getting distracted. The pacing is also not quite right for me sometimes, and it doesn't help that I can't ask questions (talking to my monitor will make me look crazy).
4. **This reflections md**
    * It's very hard for me to come up with things to put here since I usually just go about my CS, and whatever is said in class stays in class. I get tired writing a lot (it took me around 5 hours to think & write and evaluate myself), which I could have spent on my other assignments or working on my CS projects :sob:. For me, it's just a reiteration of what I've experienced so far, which we've already covered at length (aside from the ones in no. 2).