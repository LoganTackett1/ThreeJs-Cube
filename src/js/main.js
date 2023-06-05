import * as THREE from 'three';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio*0.8);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

renderer.setClearColor(0x808080);

const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,0.1,1000);

//const orbit = new OrbitControls(camera, renderer.domElement); 

const trackBall = new TrackballControls(camera, renderer.domElement);
trackBall.rotateSpeed = 3.0;

camera.position.set(18,18,18);
trackBall.update();

camera.lookAt(0,0,0);
trackBall.update();

const loader = new GLTFLoader();

const cubes = []

class Cubelet extends THREE.Group {
    constructor(ref) {
        super();
        this.rType = "cubelet";
        this.onCreate(ref);
    }
    onCreate(x) {
        cubes.push(this);
        loader.load(x.href, gltf => {
            this.add(gltf.scene);
            scene.add(this);
        });
    }
}

const grwURL = new URL('../blender/corners/GRW.glb',import.meta.url);
const GRW = new Cubelet(grwURL);
GRW.position.set(2,2,2);
GRW.rotateY(Math.PI/2);

const rbwURL = new URL('../blender/corners/RBW.glb',import.meta.url);
const RBW = new Cubelet(rbwURL);
RBW.position.set(2,2,-2);
RBW.rotateY(Math.PI);

const bowURL = new URL('../blender/corners/BOW.glb',import.meta.url);
const BOW = new Cubelet(bowURL);
BOW.position.set(-2,2,-2);
BOW.rotateY(Math.PI*(3/2));

const ogwURL = new URL('../blender/corners/OGW.glb',import.meta.url);
const OGW = new Cubelet(ogwURL);
OGW.position.set(-2,2,2);
OGW.rotateY(0);

const gwURL = new URL('../blender/edges_centers/GW.glb',import.meta.url);
const GW = new Cubelet(gwURL);
GW.position.set(0,2,2);
GW.rotateY(0);

const rwURL = new URL('../blender/edges_centers/RW.glb',import.meta.url);
const RW = new Cubelet(rwURL);
RW.position.set(2,2,0);
RW.rotateY(Math.PI/2);

const bwURL = new URL('../blender/edges_centers/BW.glb',import.meta.url);
const BW = new Cubelet(bwURL);
BW.position.set(0,2,-2);
BW.rotateY(Math.PI);

const owURL = new URL('../blender/edges_centers/OW.glb',import.meta.url);
const OW = new Cubelet(owURL);
OW.position.set(-2,2,0);
OW.rotateY(Math.PI*(3/2));

const wURL = new URL('../blender/edges_centers/W.glb',import.meta.url);
const W = new Cubelet(wURL);
W.position.set(0,2,0);
W.rotateY(0);

//

const gryURL = new URL('../blender/corners/GRY.glb',import.meta.url);
const GRY = new Cubelet(gryURL);
GRY.position.set(2,-2,2);
GRY.rotateX(Math.PI);
GRY.rotateY(Math.PI);

const rbyURL = new URL('../blender/corners/RBY.glb',import.meta.url);
const RBY = new Cubelet(rbyURL);
RBY.position.set(2,-2,-2);
RBY.rotateX(Math.PI);
RBY.rotateY(Math.PI/2);

const boyURL = new URL('../blender/corners/BOY.glb',import.meta.url);
const BOY = new Cubelet(boyURL);
BOY.position.set(-2,-2,-2);
BOY.rotateX(Math.PI);
BOY.rotateY(0);

const ogyURL = new URL('../blender/corners/OGY.glb',import.meta.url);
const OGY = new Cubelet(ogyURL);
OGY.position.set(-2,-2,2);
OGY.rotateX(Math.PI);
OGY.rotateY(Math.PI*(3/2));

const gyURL = new URL('../blender/edges_centers/GY.glb',import.meta.url);
const GY = new Cubelet(gyURL);
GY.position.set(0,-2,2);
GY.rotateX(Math.PI);
GY.rotateY(Math.PI);

const ryURL = new URL('../blender/edges_centers/RY.glb',import.meta.url);
const RY = new Cubelet(ryURL);
RY.position.set(2,-2,0);
RY.rotateX(Math.PI);
RY.rotateY(Math.PI/2);

const byURL = new URL('../blender/edges_centers/BY.glb',import.meta.url);
const BY = new Cubelet(byURL);
BY.position.set(0,-2,-2);
BY.rotateX(Math.PI);
BY.rotateY(0);

const oyURL = new URL('../blender/edges_centers/OY.glb',import.meta.url);
const OY = new Cubelet(oyURL);
OY.position.set(-2,-2,0);
OY.rotateX(Math.PI);
OY.rotateY(Math.PI*(3/2));


const yURL = new URL('../blender/edges_centers/Y.glb',import.meta.url);
const Y = new Cubelet(yURL);
Y.position.set(0,-2,0);
Y.rotateX(Math.PI);

//

const rgURL = new URL('../blender/edges_centers/RG.glb',import.meta.url);
const RG = new Cubelet(rgURL);
RG.position.set(2,0,2);
RG.rotateY(Math.PI*(1/2));
RG.rotateZ(Math.PI*(1/2));

const brURL = new URL('../blender/edges_centers/BR.glb',import.meta.url);
const BR = new Cubelet(brURL);
BR.position.set(2,0,-2);
BR.rotateY(Math.PI);
BR.rotateZ(Math.PI/2);

const obURL = new URL('../blender/edges_centers/OB.glb',import.meta.url);
const OB = new Cubelet(obURL);
OB.position.set(-2,0,-2);
OB.rotateY(-Math.PI/2);
OB.rotateZ(Math.PI/2);

const goURL = new URL('../blender/edges_centers/GO.glb',import.meta.url);
const GO = new Cubelet(goURL);
GO.position.set(-2,0,2);
GO.rotateY(0);
GO.rotateZ(Math.PI/2);

const gURL = new URL('../blender/edges_centers/G.glb',import.meta.url);
const G = new Cubelet(gURL);
G.position.set(0,0,2);
G.rotateX(Math.PI/2);

const rURL = new URL('../blender/edges_centers/R.glb',import.meta.url);
const R = new Cubelet(rURL);
R.position.set(2,0,0);
R.rotateZ(-Math.PI/2);

const bURL = new URL('../blender/edges_centers/B.glb',import.meta.url);
const B = new Cubelet(bURL);
B.position.set(0,0,-2);
B.rotateX(-Math.PI/2);

const oURL = new URL('../blender/edges_centers/O.glb',import.meta.url);
const O = new Cubelet(oURL);
O.position.set(-2,0,0);
O.rotateZ(Math.PI/2);



const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

function calcRotationAroundAxis( obj3D, axis, angle ){

    var euler;
    let quat = new THREE.Quaternion();

    if ( axis === "x" ){
        euler = new THREE.Euler( angle, 0, 0, 'XYZ' );
        quat.setFromAxisAngle(new THREE.Vector3(1,0,0),angle);
        obj3D.applyQuaternion(quat);      
    }
    if ( axis === "-x" ){
        euler = new THREE.Euler( -angle, 0, 0, 'XYZ' );
        quat.setFromAxisAngle(new THREE.Vector3(1,0,0),-angle);
        obj3D.applyQuaternion(quat);      
    }

    if ( axis === "y" ){
        euler = new THREE.Euler( 0, angle, 0, 'XYZ' );       
        quat.setFromAxisAngle(new THREE.Vector3(0,1,0),angle);
        obj3D.applyQuaternion(quat);       
    }
    if ( axis === "-y" ){
        euler = new THREE.Euler( 0, -angle, 0, 'XYZ' );       
        quat.setFromAxisAngle(new THREE.Vector3(0,1,0),-angle);
        obj3D.applyQuaternion(quat);       
    }

    if ( axis === "z" ){
        euler = new THREE.Euler( 0, 0, angle, 'XYZ' );
        quat.setFromAxisAngle(new THREE.Vector3(0,0,1),angle);
        obj3D.applyQuaternion(quat); 
    }
    if ( axis === "-z" ){
        euler = new THREE.Euler( 0, 0, -angle, 'XYZ' );
        quat.setFromAxisAngle(new THREE.Vector3(0,0,1),-angle);
        obj3D.applyQuaternion(quat); 
    }
    obj3D.position.applyEuler( euler );
}

const mousePosition = new THREE.Vector2();
window.addEventListener('mousemove',e => {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1;
});

const rayCaster = new THREE.Raycaster();

let mouseDown = false;
let currObject;
let currCubelet;
let currPlane;
let initObject;
let initCubelet;
let initPlane;

window.addEventListener('mousedown', e => {
    if (mouseDown === false && initObject == null && ready === true) {
        initObject = currObject;
        initCubelet = currCubelet;
        initPlane = currPlane;
    }
    mouseDown = true;
});

window.addEventListener('mouseup', e => {
    mouseDown = false;
    orbiting = false;
});

function firstOfRType(obj,val) {
    for (let item of obj) {
        if (item.object.rType == val) {
            return item;
        }
    }
}

function firstCube(obj) {
    for (let item of obj) {
        if (item.object.parent.userData.name == "Cube") {
            return item.object.parent.parent.parent;
        }
    }
}

const pXZ = new THREE.Mesh(new THREE.PlaneBufferGeometry(6, 6), 
   new THREE.MeshBasicMaterial( {
       color: 0x248f24, alphaTest: 0, visible: false
}));
pXZ.rType = "plane";
pXZ.dirNorm = "y";
pXZ.doRound = "y";
scene.add(pXZ);
pXZ.rotation.x = -Math.PI/2;
pXZ.position.set(0,3,0);

const nXZ = new THREE.Mesh(new THREE.PlaneBufferGeometry(6, 6), 
   new THREE.MeshBasicMaterial( {
       color: 0x248f24, alphaTest: 0, visible: false
}));
nXZ.rType = "plane";
nXZ.dirNorm = "-y";
nXZ.doRound = "y";
scene.add(nXZ);
nXZ.rotation.x = Math.PI/2;
nXZ.position.set(0,-3,0);

const pYZ = new THREE.Mesh(new THREE.PlaneBufferGeometry(6, 6), 
   new THREE.MeshBasicMaterial( {
       color: 0x248f24, alphaTest: 0, visible: false
}));
pYZ.rType = "plane";
pYZ.dirNorm = "x";
pYZ.doRound = "x";
scene.add(pYZ);
pYZ.rotation.y = Math.PI/2;
pYZ.position.set(3,0,0);

const nYZ = new THREE.Mesh(new THREE.PlaneBufferGeometry(6, 6), 
   new THREE.MeshBasicMaterial( {
       color: 0x248f24, alphaTest: 0, visible: false
}));
nYZ.rType = "plane";
nYZ.dirNorm = "-x";
nYZ.doRound = "x";
scene.add(nYZ);
nYZ.rotation.y = -Math.PI/2;
nYZ.position.set(-3,0,0);

const pXY = new THREE.Mesh(new THREE.PlaneBufferGeometry(6, 6), 
   new THREE.MeshBasicMaterial( {
       color: 0x248f24, alphaTest: 0, visible: false
}));
pXY.rType = "plane";
pXY.dirNorm = "z";
pXY.doRound = "z";
scene.add(pXY);
pXY.rotation.y = 0;
pXY.position.set(0,0,3);

const nXY = new THREE.Mesh(new THREE.PlaneBufferGeometry(6, 6), 
   new THREE.MeshBasicMaterial( {
       color: 0x248f24, alphaTest: 0, visible: false
}));
nXY.rType = "plane";
nXY.dirNorm = "-z";
nXY.doRound = "z";
scene.add(nXY);
nXY.rotation.y = Math.PI;
nXY.position.set(0,0,-3);

function roundVector(comp,vect) {
    if (comp == "z") {
        vect.z = Math.round(vect.z);
    }
    if (comp == "y") {
        vect.y = Math.round(vect.y);
    }
    if (comp == "x") {
        vect.x = Math.round(vect.x);
    }
}

function getDirection(vector) {
    if (Math.max(Math.abs(vector.x),Math.abs(vector.y),Math.abs(vector.z)) == Math.abs(vector.x)) {
        if (vector.x < 0) {
            return "-x";
        } else {
        return "x";
        }
    }
    if (Math.max(Math.abs(vector.x),Math.abs(vector.y),Math.abs(vector.z)) == Math.abs(vector.y)) {
        if (vector.y < 0) {
            return "-y";
        } else {
        return "y";
        }
    }
    if (Math.max(Math.abs(vector.x),Math.abs(vector.y),Math.abs(vector.z)) == Math.abs(vector.z)) {
        if (vector.z < 0) {
            return "-z";
        } else {
        return "z";
        }
    }
}

function selectPieces(initPiece,plane,direction) {
    let result = [];
    let turn;
    console.log(plane.dirNorm);
    console.log(direction);
    console.log(initPiece.position);
    if (plane.dirNorm == "x" || plane.dirNorm == "-x") {
        if (direction == "z" || direction == "-z") {
            for (let item of cubes) {
                if (item.position.y == initPiece.position.y) {
                    result.push(item);
                }
            }
            if (plane.dirNorm == "x") {
                if (direction == "z") {turn = "-y";}
                if (direction == "-z") {turn = "y";}
            }
            if (plane.dirNorm == "-x") {
                if (direction == "z") {turn = "y";}
                if (direction == "-z") {turn = "-y";}
            }
        }
        if (direction == "y" || direction == "-y") {
            for (let item of cubes) {
                if (item.position.z == initPiece.position.z) {
                    result.push(item);
                }
            }
            if (plane.dirNorm == "x") {
                if (direction == "y") {turn = "z";}
                if (direction == "-y") {turn = "-z";}
            }
            if (plane.dirNorm == "-x") {
                if (direction == "y") {turn = "-z";}
                if (direction == "-y") {turn = "z";}
            }
        }
        if (direction == "x" || direction == "-x") {
            reset = true;
        }
    }
    if (plane.dirNorm == "y" || plane.dirNorm == "-y") {
        if (direction == "z" || direction == "-z") {
            for (let item of cubes) {
                if (item.position.x == initPiece.position.x) {
                    result.push(item);
                }
            }
            if (plane.dirNorm == "y") {
                if (direction == "z") {turn = "x";}
                if (direction == "-z") {turn = "-x";}
            }
            if (plane.dirNorm == "-y") {
                if (direction == "z") {turn = "-x";}
                if (direction == "-z") {turn = "x";}
            }
        }
        if (direction == "x" || direction == "-x") {
            for (let item of cubes) {
                if (item.position.z == initPiece.position.z) {
                    result.push(item);
                }
            }
            if (plane.dirNorm == "y") {
                if (direction == "x") {turn = "-z";}
                if (direction == "-x") {turn = "z";}
            }
            if (plane.dirNorm == "-y") {
                if (direction == "x") {turn = "z";}
                if (direction == "-x") {turn = "-z";}
            }
        }
        if (direction == "y" || direction == "-y") {
            reset = true;
        }
    }
    if (plane.dirNorm == "z" || plane.dirNorm == "-z") {
        if (direction == "x" || direction == "-x") {
            for (let item of cubes) {
                if (item.position.y == initPiece.position.y) {
                    result.push(item);
                }
            }
            if (plane.dirNorm == "z") {
                if (direction == "x") {turn = "-y";}
                if (direction == "-x") {turn = "y";}
            }
            if (plane.dirNorm == "-z") {
                if (direction == "x") {turn = "y";}
                if (direction == "-x") {turn = "-y";}
            }
        }
        if (direction == "y" || direction == "-y") {
            for (let item of cubes) {
                if (item.position.x == initPiece.position.x) {
                    result.push(item);
                }
            }
            if (plane.dirNorm == "z") {
                if (direction == "y") {turn = "-x";}
                if (direction == "-y") {turn = "x";}
            }
            if (plane.dirNorm == "-z") {
                if (direction == "y") {turn = "x";}
                if (direction == "-y") {turn = "-x";}
            }
        }
        if (direction == "z" || direction == "-z") {
            reset = true;
        }
    }
    return [result,turn];
}

function desiredCoord(normal,taxis,coord) {
    if (normal == "x" || normal == "-x") {
        if (taxis == "y" || taxis == "-y") {
            return [coord.z,"z"];
        }
        if (taxis == "z" || taxis == "-z") {
            return [coord.y,"y"];
        }
    }
    if (normal == "y" || normal == "-y") {
        if (taxis == "x" || taxis == "-x") {
            return [coord.z,"z"];
        }
        if (taxis == "z" || taxis == "-z") {
            return [coord.x,"x"];
        }
    }
    if (normal == "z" || normal == "-z") {
        if (taxis == "x" || taxis == "-x") {
            return [coord.y,"y"];
        }
        if (taxis == "y" || taxis == "-y") {
            return [coord.x,"x"];
        }
    }
}

function roundCubelets(collection) {
    for (let item of collection) {
        item.position.round();
    }
}

function checkVal(input,upper,lower) {
    if (input > upper) {
        return upper;
    }
    if (input < lower) {
        return lower;
    } else {
        return input;
    }
}

function mapBase(dir) {
    if (dir == "-x") { return "x";}
    if (dir == "-y") { return "y";}
    if (dir == "-z") { return "z";}
    return dir;
}

/*
let bool = true;
let number = 30;
let count = number;
*/

let lock = false;
let determinant = new THREE.Vector3();
let selected;
let selectDir;
let toCoord;
let movePieces = false;
let orbiting = false;
let reset = false;
let ready = true;
let radius;

function animate() {
    trackBall.update();
    rayCaster.setFromCamera(mousePosition,camera);
    const intersects = rayCaster.intersectObjects(scene.children);

    currObject = intersects[0];
    currPlane = firstOfRType(intersects,"plane");
    currCubelet = firstCube(intersects);
    
    if (mouseDown == false && (initObject == null || initPlane == null || initCubelet == null)) {
        initCubelet = null;
        initObject = null;
        initPlane = null;
    } else if (mouseDown == true && initObject != null && initPlane && initCubelet && orbiting == false && ready == true && reset == false) {
        if (initPlane && currPlane && initCubelet) {
            let delta = new THREE.Vector3();
            delta.subVectors(currPlane.point,initPlane.point);
            roundVector(initPlane.object.doRound,delta);
            if (!lock) {
                if (Math.abs(delta.x)+Math.abs(delta.y)+Math.abs(delta.z) > 0.66) {
                    lock = true;
                    determinant.copy(delta);
                    selectDir = getDirection(determinant);
                    selected = selectPieces(initCubelet,initPlane.object,selectDir);
                    if(initCubelet.position[mapBase(initPlane.object.dirNorm)]**2 + initCubelet.position[mapBase(selectDir)]**2 > 7) {
                        radius = 8**0.5;
                    } else {
                        radius = 2;
                    }
                }
            }
            if (lock == true && reset == false) {
                toCoord = desiredCoord(initPlane.object.dirNorm,selected[1],currPlane.point);
                movePieces = true;
            }
        }
    }


    if (mouseDown == false && lock == true) {
        toCoord[0] = (Math.round((toCoord[0]/4)+0.5)-0.5)*4;
        lock = false;
    }

    if (movePieces == true) {
        if (mouseDown == false) {
            ready = false;
        }
        let toAngle = Math.abs(Math.acos(checkVal(toCoord[0]/(radius),1,-1))-Math.acos(checkVal(initCubelet.position[toCoord[1]]/(radius),1,-1)));
    
        if (initPlane.object.dirNorm == "x" || initPlane.object.dirNorm == "-x") {
            if (selectDir == "z" || selectDir == "y") {
                if(initCubelet.position[toCoord[1]] < toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],Math.min(Math.PI/15,toAngle));
                    }
                } else if (initCubelet.position[toCoord[1]] > toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],-Math.min(Math.PI/15,toAngle));
                    }
                } else {
                    if (lock == false) {
                        movePieces = false;
                        roundCubelets(selected[0]);
                        reset = true;
                    }
                }
            }
            if (selectDir == "-z" || selectDir == "-y") {
                if(initCubelet.position[toCoord[1]] > toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],Math.min(Math.PI/15,toAngle));
                    }
                } else if (initCubelet.position[toCoord[1]] < toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],-Math.min(Math.PI/15,toAngle));
                    }
                } else {
                    if (lock == false) {
                        movePieces = false;
                        roundCubelets(selected[0]);
                        reset = true;
                    }
                }
            }
        }
        if (initPlane.object.dirNorm == "y" || initPlane.object.dirNorm == "-y") {
            if (selectDir == "x" || selectDir == "z") {
                if(initCubelet.position[toCoord[1]] < toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],Math.min(Math.PI/15,toAngle));
                    }
                } else if (initCubelet.position[toCoord[1]] > toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],-Math.min(Math.PI/15,toAngle));
                    }
                } else {
                    if (lock == false) {
                        movePieces = false;
                        roundCubelets(selected[0]);
                        reset = true;
                    }
                }
            }
            if (selectDir == "-x" || selectDir == "-z") {
                if(initCubelet.position[toCoord[1]] > toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],Math.min(Math.PI/15,toAngle));
                    }
                } else if (initCubelet.position[toCoord[1]] < toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],-Math.min(Math.PI/15,toAngle));
                    }
                } else {
                    if (lock == false) {
                        movePieces = false;
                        roundCubelets(selected[0]);
                        reset = true;
                    }
                }
            }
        }
        if (initPlane.object.dirNorm == "z" || initPlane.object.dirNorm == "-z") {
            if (selectDir == "-x" || selectDir == "y") {
                if(initCubelet.position[toCoord[1]] < toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],Math.min(Math.PI/15,toAngle));
                    }
                } else if (initCubelet.position[toCoord[1]] > toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],-Math.min(Math.PI/15,toAngle));
                    }
                } else {
                    if (lock == false) {
                        movePieces = false;
                        roundCubelets(selected[0]);
                        reset = true;
                    }
                }
            }
            if (selectDir == "x" || selectDir == "-y") {
                if(initCubelet.position[toCoord[1]] > toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],Math.min(Math.PI/15,toAngle));
                    }
                } else if (initCubelet.position[toCoord[1]] < toCoord[0] && Math.abs(initCubelet.position[toCoord[1]]-toCoord[0]) > 0.001) {
                    for (let object of selected[0]) {
                        calcRotationAroundAxis(object,selected[1],-Math.min(Math.PI/15,toAngle));
                    }
                } else {
                    if (lock == false) {
                        movePieces = false;
                        roundCubelets(selected[0]);
                        reset = true;
                    }
                }
            }
        }
    }

    if (reset == true) {
        initObject = null;
        initPlane = null;
        initCubelet = null;
        reset = false;
        ready = true;
    }

    if (currObject == undefined || (mouseDown == true && initObject == undefined)) {
        trackBall.enabled = true;
        orbiting = true;
    } else {
        trackBall.enabled = false;
        orbiting = false;
    }

    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);

