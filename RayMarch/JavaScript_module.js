/*
- Ray Marching
- @Author: interpreterK
https://www.desmos.com/calculator/fc191j1w4k
*/

const M_D_DEF = {
    B1: {X: 0, Y: 0, Z: 0},
    B2: {X: 0, Y: 0, Z: 0},
    B3: {X: 0, Y: 0, Z: 0},
    Size: 500
}

//M_D: March_Data
/*March_Data REF array: {
    B1: {X: X, Y: Y, Z: Z},
    B2: {X: X, Y: Y, Z: Z},
    B3: {X: X, Y: Y, Z: Z},
    Size: Size
}*/
export class RayMarch {
	constructor(X = 0, Y = 0, Z = 0) {
		this.X = X
		this.Y = Y
		this.Z = Z
	}

	Ball_2D(M_D = M_D_DEF) {
	    return (((M_D.B1.X-this.X)^2+(M_D.B1.Y-this.Y)^2) //Ball1 (Intersect)
	            *(M_D.B2.X-this.X)^2+(M_D.B2.Y-this.Y)^2  //Ball2 (Intersect)
	            *(M_D.B3.X-this.X)^2+(M_D.B3.Y-this.Y)^2) //Ball3 (Intersect)
	            *(M_D.Size)                               //Size
	    //You can keep extending it supports unlimited.
	}
	Ball_3D(M_D = M_D_DEF) {
	    return (((M_D.B1.X-this.X)^2+(M_D.B1.Y-this.Y)^2+(M_D.B1.Z-this.Z)^2) //Ball1 (Intersect)
            *(M_D.B2.X-this.X)^2+(M_D.B2.Y-this.Y)^2+(M_D.B2.Z-this.Z)^2  	  //Ball2 (Intersect)
            *(M_D.B3.X-this.X)^2+(M_D.B3.Y-this.Y)^2+(M_D.B3.Z-this.Z)^2) 	  //Ball3 (Intersect)
            *(M_D.Size)                                                		  //Size
		 // You can keep extending it supports unlimited.	
	}
}