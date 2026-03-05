import { useState } from "react";

const LAB_NAME = "Applied Physics Laboratory";
const LAB_ROOM = "Room 407 — EARIST College of Arts and Sciences";

const EQ0 = [
  { id:1, name:"Oscilloscope",       model:"Tektronix TBS1052B", serial:"TK-0021", condition:"Good",         category:"Electronics", quantity:3,  available:2, qrCode:"EQ-001", lastMaint:"2025-01-10", nextMaint:"2025-07-10" },
  { id:2, name:"Digital Multimeter", model:"Fluke 117",          serial:"FL-0034", condition:"Good",         category:"Electronics", quantity:5,  available:4, qrCode:"EQ-002", lastMaint:"2025-02-15", nextMaint:"2025-08-15" },
  { id:3, name:"Microscope",         model:"Olympus CX23",       serial:"OL-0012", condition:"Fair",         category:"Optics",      quantity:4,  available:3, qrCode:"EQ-003", lastMaint:"2024-12-01", nextMaint:"2025-06-01" },
  { id:4, name:"Centrifuge",         model:"Eppendorf 5424",     serial:"EP-0009", condition:"Good",         category:"Biology",     quantity:2,  available:2, qrCode:"EQ-004", lastMaint:"2025-03-01", nextMaint:"2025-09-01" },
  { id:5, name:"Spectrophotometer",  model:"Shimadzu UV-1800",   serial:"SH-0003", condition:"Needs Repair", category:"Chemistry",   quantity:1,  available:0, qrCode:"EQ-005", lastMaint:"2024-11-20", nextMaint:"2025-05-20" },
  { id:6, name:"pH Meter",           model:"Hanna HI9813",       serial:"HN-0017", condition:"Good",         category:"Chemistry",   quantity:3,  available:3, qrCode:"EQ-006", lastMaint:"2025-01-05", nextMaint:"2025-07-05" },
  { id:7, name:"Power Supply",       model:"Keysight E3631A",    serial:"KY-0028", condition:"Good",         category:"Electronics", quantity:4,  available:2, qrCode:"EQ-007", lastMaint:"2025-02-20", nextMaint:"2025-08-20" },
  { id:8, name:"Bunsen Burner",      model:"Standard Lab",       serial:"BB-0045", condition:"Good",         category:"Chemistry",   quantity:10, available:8, qrCode:"EQ-008", lastMaint:"2025-03-10", nextMaint:"2025-09-10" },
];

const RQ0 = [
  { id:1, studentName:"Maria Santos",   studentId:"2021-00123", equipmentId:1, equipmentName:"Oscilloscope",       purpose:"EE Lab Experiment 3",     dateNeeded:"2025-06-20", returnDate:"2025-06-21", status:"Pending",  ts:"2025-06-15 09:30" },
  { id:2, studentName:"Juan dela Cruz", studentId:"2022-00456", equipmentId:3, equipmentName:"Microscope",         purpose:"Bio 101 Lab Report",       dateNeeded:"2025-06-18", returnDate:"2025-06-19", status:"Approved", ts:"2025-06-14 14:22" },
  { id:3, studentName:"Ana Reyes",      studentId:"2023-00789", equipmentId:2, equipmentName:"Digital Multimeter", purpose:"Circuit Analysis Project",  dateNeeded:"2025-06-22", returnDate:"2025-06-23", status:"Pending",  ts:"2025-06-15 11:05" },
  { id:4, studentName:"Pedro Lim",      studentId:"2021-00234", equipmentId:6, equipmentName:"pH Meter",           purpose:"Titration Experiment",      dateNeeded:"2025-06-17", returnDate:"2025-06-17", status:"Returned", ts:"2025-06-12 10:00" },
  { id:5, studentName:"Clara Bautista", studentId:"2022-00567", equipmentId:4, equipmentName:"Centrifuge",         purpose:"Cell Separation Lab",       dateNeeded:"2025-06-19", returnDate:"2025-06-20", status:"Rejected", ts:"2025-06-13 08:45" },
];

const NT0 = [
  { id:1, msg:"Borrow request from Maria Santos is pending approval", time:"10 mins ago", read:false },
  { id:2, msg:"Spectrophotometer maintenance is overdue!",            time:"2 hours ago",  read:false },
  { id:3, msg:"Ana Reyes submitted a new borrow request",             time:"1 hour ago",   read:false },
  { id:4, msg:"Juan dela Cruz returned Microscope on time",           time:"Yesterday",    read:true  },
];

const SVG_PATHS = {
  dashboard:   "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  inventory:   "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  request:     "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  report:      "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  maintenance: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  bell:        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  logout:      "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  check:       "M5 13l4 4L19 7",
  close:       "M6 18L18 6M6 6l12 12",
  plus:        "M12 4v16m8-8H4",
  search:      "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0",
  alert:       "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  download:    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  edit:        "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  trash:       "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
};

function Ic({ n, s = 18 }) {
  const d = SVG_PATHS[n] || "";
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const BADGE_MAP = {
  Pending:       ["#fff3cd","#856404"],
  Approved:      ["#d1fae5","#065f46"],
  Rejected:      ["#fee2e2","#991b1b"],
  Returned:      ["#dbeafe","#1e40af"],
  Good:          ["#d1fae5","#065f46"],
  Fair:          ["#fff3cd","#856404"],
  "Needs Repair":["#fee2e2","#991b1b"],
};

function Badge({ s }) {
  const [bg, c] = BADGE_MAP[s] || ["#f3f4f6","#374151"];
  return (
    <span style={{ background:bg, color:c, borderRadius:20, padding:"3px 10px", fontSize:11, fontWeight:700, whiteSpace:"nowrap" }}>
      {s}
    </span>
  );
}

function StatCard({ label, value, icon, accent, sub }) {
  return (
    <div style={{ background:"#fff", borderRadius:16, padding:"20px 22px", boxShadow:"0 2px 12px rgba(0,0,0,.06)", borderLeft:`4px solid ${accent}`, display:"flex", alignItems:"center", gap:14 }}>
      <div style={{ width:46, height:46, borderRadius:12, background:accent+"22", display:"flex", alignItems:"center", justifyContent:"center", color:accent, flexShrink:0 }}>
        <Ic n={icon} s={20} />
      </div>
      <div>
        <div style={{ fontSize:26, fontWeight:800, color:"#1a1a2e" }}>{value}</div>
        <div style={{ fontSize:12, color:"#666", fontWeight:600 }}>{label}</div>
        {sub && <div style={{ fontSize:11, color:accent, fontWeight:700, marginTop:2 }}>{sub}</div>}
      </div>
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.5)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}
    >
      <div style={{ background:"#fff", borderRadius:20, width:"100%", maxWidth:500, maxHeight:"88vh", overflowY:"auto", boxShadow:"0 20px 60px rgba(0,0,0,.2)" }}>
        <div style={{ padding:"22px 26px 0", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <h3 style={{ margin:0, fontSize:17, fontWeight:800, color:"#1a1a2e" }}>{title}</h3>
          <button onClick={onClose} style={{ background:"#f3f4f6", border:"none", borderRadius:8, width:30, height:30, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#666" }}>
            <Ic n="close" s={15} />
          </button>
        </div>
        <div style={{ padding:26 }}>{children}</div>
      </div>
    </div>
  );
}

const inputStyle = { width:"100%", padding:"9px 13px", border:"1.5px solid #e5e7eb", borderRadius:10, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit" };

function Field({ label, children }) {
  return (
    <div style={{ marginBottom:14 }}>
      <label style={{ display:"block", fontSize:12, fontWeight:700, color:"#374151", marginBottom:5 }}>{label}</label>
      {children}
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ eq, rq }) {
  const today = new Date();
  const overdue = eq.filter(e => e.nextMaint && new Date(e.nextMaint) < today);
  const cats = [...new Set(eq.map(e => e.category))];
  const CLR = ["#6366f1","#10b981","#f59e0b","#ef4444","#3b82f6"];

  return (
    <div>
      <h2 style={{ fontSize:22, fontWeight:900, color:"#1a1a2e", margin:"0 0 4px" }}>Dashboard Overview</h2>
      <p style={{ color:"#888", fontSize:13, margin:"0 0 20px" }}>{LAB_NAME} · {LAB_ROOM}</p>

      {overdue.length > 0 && (
        <div style={{ background:"#fee2e2", border:"1px solid #fca5a5", borderRadius:12, padding:"11px 16px", marginBottom:18, display:"flex", alignItems:"center", gap:10, color:"#991b1b" }}>
          <Ic n="alert" s={16} />
          <span style={{ fontSize:13, fontWeight:600 }}>{overdue.length} equipment overdue for maintenance — please attend immediately.</span>
        </div>
      )}

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:14, marginBottom:26 }}>
        <StatCard label="Total Equipment"    value={eq.length}                                       icon="inventory"    accent="#6366f1" sub={eq.reduce((a,e)=>a+e.available,0)+" available"} />
        <StatCard label="Pending Requests"   value={rq.filter(r=>r.status==="Pending").length}       icon="request"      accent="#f59e0b" sub="Awaiting approval" />
        <StatCard label="Needs Repair"       value={eq.filter(e=>e.condition==="Needs Repair").length} icon="maintenance" accent="#ef4444" sub="Requires attention" />
        <StatCard label="Total Transactions" value={rq.length}                                       icon="report"       accent="#10b981" sub="All time" />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
        <div style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
          <h3 style={{ margin:"0 0 16px", fontSize:15, fontWeight:800, color:"#1a1a2e" }}>Recent Requests</h3>
          {rq.slice(0,5).map(r => (
            <div key={r.id} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid #f3f4f6" }}>
              <div>
                <div style={{ fontSize:13, fontWeight:700, color:"#1a1a2e" }}>{r.studentName}</div>
                <div style={{ fontSize:11, color:"#888" }}>{r.equipmentName} · {r.ts}</div>
              </div>
              <Badge s={r.status} />
            </div>
          ))}
        </div>

        <div style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
          <h3 style={{ margin:"0 0 16px", fontSize:15, fontWeight:800, color:"#1a1a2e" }}>Equipment by Category</h3>
          {cats.map((c,i) => {
            const cnt = eq.filter(e => e.category === c).length;
            return (
              <div key={c} style={{ marginBottom:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, fontWeight:600, marginBottom:3 }}>
                  <span style={{ color:"#374151" }}>{c}</span>
                  <span style={{ color:"#888" }}>{cnt}</span>
                </div>
                <div style={{ height:7, background:"#f3f4f6", borderRadius:8 }}>
                  <div style={{ height:"100%", width:`${(cnt/eq.length)*100}%`, background:CLR[i%CLR.length], borderRadius:8 }} />
                </div>
              </div>
            );
          })}
          {overdue.length > 0 && (
            <div style={{ marginTop:14, padding:12, background:"#fff5f5", borderRadius:10, border:"1px dashed #fca5a5" }}>
              <div style={{ fontSize:11, fontWeight:700, color:"#ef4444", marginBottom:4 }}>🔧 Overdue Maintenance</div>
              {overdue.map(e => <div key={e.id} style={{ fontSize:11, color:"#7f1d1d", marginTop:2 }}>⛔ {e.name} — since {e.nextMaint}</div>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── INVENTORY ────────────────────────────────────────────────────────────────
function Inventory({ eq, setEq }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const blank = { name:"", model:"", serial:"", condition:"Good", category:"Electronics", quantity:1, available:1, nextMaint:"" };
  const [form, setForm] = useState(blank);

  const cats = ["All", ...new Set(eq.map(e => e.category))];
  const list = eq
    .filter(e => cat === "All" || e.category === cat)
    .filter(e => e.name.toLowerCase().includes(search.toLowerCase()) || e.model.toLowerCase().includes(search.toLowerCase()));

  function openAdd()  { setEditing(null); setForm(blank); setShowModal(true); }
  function openEdit(e){ setEditing(e); setForm({...e}); setShowModal(true); }
  function del(id)    { setEq(p => p.filter(e => e.id !== id)); }
  function save() {
    if (editing) {
      setEq(p => p.map(e => e.id === editing.id ? { ...form, id:editing.id, qrCode:editing.qrCode, lastMaint:editing.lastMaint } : e));
    } else {
      setEq(p => [...p, { ...form, id:Date.now(), qrCode:"EQ-"+String(Date.now()).slice(-3), lastMaint:"" }]);
    }
    setShowModal(false);
  }

  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
        <div>
          <h2 style={{ fontSize:22, fontWeight:900, color:"#1a1a2e", margin:"0 0 4px" }}>Equipment Inventory</h2>
          <p style={{ color:"#888", fontSize:13, margin:0 }}>Manage all laboratory assets</p>
        </div>
        <button onClick={openAdd} style={{ display:"flex", alignItems:"center", gap:7, background:"#6366f1", color:"#fff", border:"none", borderRadius:11, padding:"9px 18px", fontWeight:700, cursor:"pointer", fontSize:13, fontFamily:"inherit" }}>
          <Ic n="plus" s={15} /> Add Equipment
        </button>
      </div>

      <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap" }}>
        <div style={{ flex:1, minWidth:180, position:"relative" }}>
          <div style={{ position:"absolute", left:11, top:"50%", transform:"translateY(-50%)", color:"#aaa" }}><Ic n="search" s={15} /></div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search equipment..." style={{ ...inputStyle, paddingLeft:34 }} />
        </div>
        <select value={cat} onChange={e=>setCat(e.target.value)} style={{ ...inputStyle, width:"auto", cursor:"pointer" }}>
          {cats.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div style={{ background:"#fff", borderRadius:16, boxShadow:"0 2px 12px rgba(0,0,0,.06)", overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", minWidth:700 }}>
          <thead>
            <tr style={{ background:"#f8f9ff" }}>
              {["QR Code","Equipment","Category","Qty / Avail","Condition","Next Maint.","Actions"].map(h => (
                <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:11, fontWeight:800, color:"#6366f1", textTransform:"uppercase", whiteSpace:"nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((e, i) => (
              <tr key={e.id} style={{ borderTop:"1px solid #f3f4f6", background:i%2===0?"#fff":"#f
