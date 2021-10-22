const assert = require('chai').assert;
const {sayHello,makeAddition,} = require('../app');


// Results
sayHelloResult = sayHello();
makeAdditionResult = makeAddition(5);

describe('App',function(){

    it('sayHello should return hello',function(){
       // let result = sayHello();
        assert.equal(sayHelloResult,'hello');
    })

    it('sayHello should return type of String',function(){
       // let result = sayHello();
        assert.typeOf(sayHelloResult,'string');
    })

    it('makeAddition should return 6 when we use 5',function(){
       // let result = makeAddition(5);
        assert.equal(makeAdditionResult,6);
    })

    it('makeAddition should return type of Number when we use 5',function(){
       // let result = makeAddition(5);
        assert.typeOf(makeAdditionResult,'Number');
    })

})
