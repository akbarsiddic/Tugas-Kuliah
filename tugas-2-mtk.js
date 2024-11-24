// Tugas 2 Pengantar Matematika Universitas Terbuka 

// Soal 3
// Didefinisikan himpunan {0,1, 2,3} dan { 3, 1,3,6} A B   
// Buatlah relasi sebagai pasangan berurutan dengan aturan sbb;
// a. Jika ab > 0 maka (a,b) adalah anggota relasi
// b. Jika a <= b maka (a,b) adalah anggota relasi

// A
function check(ar1, ar2) {
    let res = [];
    for (let i = 0; i < ar1.length; i++) {
        for (let j = 0; j < ar2.length; j++) {
            // if a <= b then push a and b like (a,b) to res
            if (ar1[i] * ar2[j] > 0) {
                res.push([ar1[i], ar2[j]]);
            }
        }
    }
    return res;
}

const ar1 = [0, 1, 2, 3];
const ar2 = [-3, -1, 3, 6];
console.log(check(ar1, ar2));

// B
function check(ar1, ar2) {
    let res = [];
    for (let i = 0; i < ar1.length; i++) {
        for (let j = 0; j < ar2.length; j++) {
            // if a <= b then push a and b like (a,b) to res
            if (ar1[i] <= ar2[j]) {
                res.push([ar1[i], ar2[j]]);
            }
        }
    }
    return res;
}

const ar11 = [0, 1, 2, 3];
const ar21 = [-3, -1, 3, 6];
console.log(check(ar1, ar2));