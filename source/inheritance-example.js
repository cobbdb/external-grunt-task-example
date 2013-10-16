/**
 * Douglas Crockford's pattern of Parasitic Inheritance.
 */

function Pet() {
    return {
        speak: function () {
            throw Error('Bad call to abstract Pet.speak');
        }
    };
}

function Dog() {
    var pet = Pet();
    pet.speak = function () {
        return 'WOOF!';
    };
    return pet;
}

function Cat() {
    var pet = Pet();
    pet.speak = function () {
        return 'MEOW!';
    };
    return pet;
}
