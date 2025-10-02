class Vec3 {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    xOf(){
        return this.x;
    }

    yOf(){
        return this.y;
    }

    zOf(){
        return this.z;
    }

    String(){
        return `Vec3(${xOf()}, ${yOf()}, ${zOf()})`;
    }
}

vec = new Vec3(1, 2, 3);
console.log(String(vec));