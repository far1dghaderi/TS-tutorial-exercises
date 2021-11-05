### Otional properties

By default, TS assume that, we will define a value for optional props every time. but if we initalize TSC and enabling strict mode in it, It will no longer do that and it just makes us to ensure him that we will pass a value to that optional prop or not

### Type assertion

We will tell TS that: Hey, that value that this function will return will be a type that I say, so just trust me and don't be strict on that.
const id = user.getProp("id") as number;

### Constraint

It limits the types that something can accept as a value

### Shortand for class getters

If we have a getter that its value is dependent on the ctor or isn't dependent to anything, we can define it like so:
name = value to retturn; ex=> name = fname;
This will executed after the ctor and before of all the other fields and methodsotherwise, it will return undefined
