import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio*0.8);

document.body.appendChild(renderer.domElement);


const scene = new THREE.Scene();

renderer.setClearColor(0x808080);

const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,0.1,1000);

//const orbit = new OrbitControls(camera, renderer.domElement); 

const trackBall = new TrackballControls(camera, renderer.domElement);


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

for (let item of cubes) {
    item.solvedPos = {...item.position};
    item.solvedRot = {...item.rotation};
}

function resetCube() {
    if (!(scramToggle == true || movePieces == true)) {
        for (let item of cubes) {
            item.position.set(item.solvedPos.x,item.solvedPos.y,item.solvedPos.z);
            item.rotation.x = item.solvedRot._x;
            item.rotation.y = item.solvedRot._y;
            item.rotation.z = item.solvedRot._z;
        }
    }
}



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

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

let touchScreen = window.mobileAndTabletCheck();

if (touchScreen == false) {
    trackBall.rotateSpeed = 3.5;
    trackBall.minDistance = 15;
    trackBall.maxDistance = 50;
} else {
    trackBall.rotateSpeed = 2.0;
    trackBall.minDistance = 18;
    trackBall.maxDistance = 50;
}

const mousePosition = new THREE.Vector2();

const rayCaster = new THREE.Raycaster();

let mouseDown = false;
let clickToggle = false;
let currObject;
let currCubelet;
let currPlane;
let initObject;
let initCubelet;
let initPlane;

if (touchScreen == false) {
    window.addEventListener('mousemove',e => {
        mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
        mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1;
    });
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
} else {
    trackBall.noPan = true;
    window.addEventListener("touchstart", e => {
        clickToggle = true;
        trackBall.update();
        mouseDown = true;
        mousePosition.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mousePosition.y = - (e.touches[0].clientY / window.innerHeight) * 2 + 1;
    });
    window.addEventListener("touchmove", e => {
        trackBall.update();
        mousePosition.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mousePosition.y = - (e.touches[0].clientY / window.innerHeight) * 2 + 1;
    });
    window.addEventListener("touchcancel", e => {
        trackBall.update();
        mouseDown = false;
        orbiting = false;
    });
    window.addEventListener("touchend", e => {
        trackBall.update();
        mouseDown = false;
        orbiting = false;
    });
}




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
        item.rotation.x = Math.round(item.rotation.x*(2/Math.PI))*(Math.PI/2);
        item.rotation.y = Math.round(item.rotation.y*(2/Math.PI))*(Math.PI/2);
        item.rotation.z = Math.round(item.rotation.z*(2/Math.PI))*(Math.PI/2);
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

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth,window.innerHeight*0.1);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.bottom = "0px";
document.body.appendChild(labelRenderer.domElement);

const container = document.createElement("div");
container.className = "container";

const resetBtn = document.createElement("button");
resetBtn.className = "reset_button";
resetBtn.textContent = "Reset";
container.appendChild(resetBtn);

const scrambleBtn = document.createElement("button");
scrambleBtn.className = "scramble_button";
scrambleBtn.textContent = "Scramble";
container.appendChild(scrambleBtn);

const containerObject = new CSS2DObject(container);
scene.add(containerObject);

let scrambleStack = {}
scrambleStack.current = null;
scrambleStack.stack = [];
let scramToggle = false;

// R is right clockwise r is right counter clockwise

function generateScramble() {
    if (scramToggle == false) {
    for (let i = 1; i <= 20; i++) {
        let num = Math.floor(12*Math.random());
        if (num == 0) {
            scrambleStack.stack.push("R");
        }
        if (num == 1) {
            scrambleStack.stack.push("r");
        }
        if (num == 2) {
            scrambleStack.stack.push("L");
        }
        if (num == 3) {
            scrambleStack.stack.push("l");
        }
        if (num == 4) {
            scrambleStack.stack.push("U");
        }
        if (num == 5) {
            scrambleStack.stack.push("u");
        }
        if (num == 6) {
            scrambleStack.stack.push("D");
        }
        if (num == 7) {
            scrambleStack.stack.push("d");
        }
        if (num == 8) {
            scrambleStack.stack.push("F");
        }
        if (num == 9) {
            scrambleStack.stack.push("f");
        }
        if (num == 10) {
            scrambleStack.stack.push("B");
        }
        if (num == 11) {
            scrambleStack.stack.push("b");
        }
    }
    scramToggle = true;
}
}

if (touchScreen == false) {
    resetBtn.addEventListener("click", e => {
        resetCube();
    });
    scrambleBtn.addEventListener("click", e => {
        generateScramble();
    });
}
if (touchScreen == true) {
    resetBtn.addEventListener("touchstart", e => {
        resetCube();
    });
    scrambleBtn.addEventListener("touchstart", e => {
        generateScramble();
    });
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
let intersects;
let rStep;
let selectSide = [];

let angle;
let axis;


function animate() {
    
    trackBall.update();
    if (touchScreen == false) {
        rayCaster.setFromCamera(mousePosition,camera);
        intersects = rayCaster.intersectObjects(scene.children);
    } else if (mouseDown == true && touchScreen == true) {
        rayCaster.setFromCamera(mousePosition,camera);
        intersects = rayCaster.intersectObjects(scene.children);
    }
    
    if (touchScreen == false || (touchScreen == true && mouseDown == true)) {
        currObject = intersects[0];
        currPlane = firstOfRType(intersects,"plane");
        currCubelet = firstCube(intersects);
    }

    if (clickToggle == true) {
        clickToggle = false;
        if (!currPlane && !currCubelet) {
            orbiting = true;
            trackBall.noRotate = false;
            trackBall.noZoom = false;
        } else {
            orbiting = false;
            trackBall.noRotate = true;
            trackBall.noZoom = true;
        }
    }

    if (scramToggle == true) {
        ready = false;
        if (scrambleStack.current != null) {
            if (selectSide.length == 0) {
                if (scrambleStack.current == "R") {
                    axis = "x";
                    angle = Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.x == 2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "r") {
                    axis = "x";
                    angle = -Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.x == 2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "L") {
                    axis = "x";
                    angle = Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.x == -2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "l") {
                    axis = "x";
                    angle = -Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.x == -2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "U") {
                    axis = "y";
                    angle = Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.y == 2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "u") {
                    axis = "y";
                    angle = -Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.y == 2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "D") {
                    axis = "y";
                    angle = Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.y == -2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "d") {
                    axis = "y";
                    angle = -Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.y == -2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "F") {
                    axis = "z";
                    angle = Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.z == 2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "f") {
                    axis = "z";
                    angle = -Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.z == 2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "B") {
                    axis = "z";
                    angle = Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.z == -2) {
                            selectSide.push(item);
                        }
                    }
                }
                if (scrambleStack.current == "b") {
                    axis = "z";
                    angle = -Math.PI/16;
                    for (let item of cubes) {
                        if (item.position.z == -2) {
                            selectSide.push(item);
                        }
                    }
                }
            }
            if (rStep == 0) {
                scrambleStack.current = null;
                roundCubelets(selectSide);
                selectSide = [];
            } else {
                rStep -= 1;
                for (let item of selectSide) {
                    calcRotationAroundAxis(item,axis,angle);
                }
            }
        } else {
            if (scrambleStack.stack.length == 0) {
                scramToggle = false;
                ready = true;
            } else {
                scrambleStack.current = scrambleStack.stack.pop();
                rStep = 8;
            }
        }
    }

    if ((!initObject || !initPlane || !initCubelet) && touchScreen == true && mouseDown == true) {
        if (orbiting == false) {
            initObject = currObject;
            initPlane = currPlane;
            initCubelet = currCubelet;
            if (touchScreen == true) {
                currObject = null;
                currPlane = null;
                currCubelet = null;
            }
        }
    }

    if (mouseDown == false && (initObject == null || initPlane == null || initCubelet == null || movePieces == false)) {
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


    if ((mouseDown == false || !currObject) && lock == true) {
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
        initCubelet = null;
        initObject = null;
        initPlane = null;
        if (touchScreen == true) {
            currObject = null;
            currPlane = null;
            currCubelet = null;
        }

        reset = false;
        ready = true;
    }
    if (touchScreen == false) {
        if (currObject == undefined || (mouseDown == true && initObject == undefined)) {
            if (touchScreen == false) {trackBall.enabled = true;}
            if (touchScreen == true) {
                trackBall.noRotate = false;
                trackBall.noZoom = false;
            }
            orbiting = true;
        } else {
            if (touchScreen == false) {trackBall.enabled = false;}
            if (touchScreen == true) {
                trackBall.noRotate = true;
                trackBall.noZoom = true;
            }
            orbiting = false;
        }
    }
    renderer.render(scene,camera);
    labelRenderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
    labelRenderer.setSize(window.innerWidth,window.innerHeight*0.1);
})

