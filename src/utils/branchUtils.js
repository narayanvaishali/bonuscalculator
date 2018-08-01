import firebase from "firebase";

//database
const db = firebase.database();

export function getBranches(done) {
  const branchesRef = db.ref("branches");
  branchesRef.once("value", snapshot => {
    const branches = snapshot.val();
    const list = Object.keys(branches).map(key => {
      const { branchname, target } = branches[key];
      return {
        key,
        branchname,
        target
      };
    });
    done(list);
  });
}

export function getBranch() {}

export function createBranch(branch, done) {
  const branchesRef = db.ref("branches");
  branchesRef
    .push(branch)
    .then(res => done(false, res))
    .catch(err => done(err, undefined));
}

export function updateBranch() {}

export function deleteBranch() {}
