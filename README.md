kindly compile the project before execution
> tsc greeter.ts
# starter-typescript
This is just a boiler plate code.
contains 
.vscode setting auto save
1 html - basic hello world
package.json - has httpserver configured

## task created for the ts compiler

#apart from demo files- following are important topics
## modules
we can use reference instead of modules. but in larger projects modules appears to be fit 
by ecma5, any files with export or import will be considered as modules.
instead of references, we can simply use modules.
- modules we can use particular part of code or block to use.
- modules are not known to browser. some module packagers are required like commonjs, webpacks,etc
- we need to configure module packages in the code to make out code work. install packagers using npm

##module vs class
module makes the particulat portion say clas, interface or funciotions in it local scope. it is not available globally. if we want we need to export. 
we ca nwrite different classes to achieve modularity like module. but they are often globally available. so without referencing, we can include in other files.
for simple application it is very fine to write classes for modularity or arrangemging code. when code becomes larger, modularity holds good as particular module runs only wjen it is imported. -apdinu sollikranga.

##modules loader
classes or any file is generally considered as extension of another file. at times reference even not required.when bundled or using files in tsconfig, we can bundled into single file itself.
But modules comes mainly for modularity or code arrangement. to make it work together, some external js modular loader is required like commonjs, adm,ecma2015 modular loader,etc.

##type definition
type script is new language. we cant use other popular library like jquery directly.
- there is site who maintains npmjs.com or other sites. we can install in our node_mocule which creates the xxx.d.ts and installs jquery. if we import or reference this d.ts in ts file, we can use all the jquery functions easily

##final words
in tsconfig- files:'./app.js ' // this will make all the files combine and provide as single file
tsconfig - for modules lot of configs are available. which module resolver to use etc.




