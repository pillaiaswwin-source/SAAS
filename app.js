// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
}

// LOGOUT
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// ADD DATA
function gateIn() {
  const id = document.getElementById("containerId").value;
  const truck = document.getElementById("truckNo").value;

  db.collection("containers").add({
    containerId: id,
    truckNo: truck,
    status: "IN",
    time: new Date()
  });
}

// UPDATE
function gateOut() {
  const id = document.getElementById("containerId").value;

  db.collection("containers")
    .where("containerId", "==", id)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        db.collection("containers").doc(doc.id).update({
          status: "OUT"
        });
      });
    });
}

// LOAD DASHBOARD
let allData = [];

if (document.getElementById("list")) {
  db.collection("containers").onSnapshot(snapshot => {

    let total = 0;
    let active = 0;

    const list = document.getElementById("list");
    list.innerHTML = "";
    allData = [];

    snapshot.forEach(doc => {
      const data = doc.data();
      total++;
      if (data.status === "IN") active++;

      allData.push(data);

      const li = document.createElement("li");
      li.innerText = `${data.containerId} | ${data.status}`;
      list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
    document.getElementById("active").innerText = active;
    document.getElementById("movements").innerText = total;
  });
}

// SEARCH
function searchContainer() {
  const q = document.getElementById("searchBox").value.toLowerCase();
  const list = document.getElementById("list");
  list.innerHTML = "";

  allData.forEach(d => {
    if (d.containerId.toLowerCase().includes(q)) {
      const li = document.createElement("li");
      li.innerText = `${d.containerId} | ${d.status}`;
      list.appendChild(li);
    }
  });
}
