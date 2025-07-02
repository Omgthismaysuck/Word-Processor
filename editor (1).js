
function execCmd(command) {
  document.execCommand(command, false, null);
}

function execCmdArg(command, value) {
  document.execCommand(command, false, value);
}

document.getElementById('imgInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = document.createElement('img');
    img.src = event.target.result;
    img.style.maxWidth = '100%';
    document.getElementById('editor').appendChild(img);
  };
  reader.readAsDataURL(file);
});

function printDoc() {
  const content = document.getElementById('editor').innerHTML;
  const win = window.open('', '', 'width=800,height=600');
  win.document.write(`<html><body>${content}</body></html>`);
  win.document.close();
  win.focus();
  win.print();
  win.close();
}

function saveDoc() {
  const data = document.getElementById('editor').innerHTML;
  localStorage.setItem('wordclone_doc', data);
  alert("Document Saved!");
}

function loadDoc() {
  const data = localStorage.getItem('wordclone_doc');
  if (data) {
    document.getElementById('editor').innerHTML = data;
  } else {
    alert("No saved document found.");
  }
}

function exportPDF() {
  const element = document.getElementById('editor');
  html2pdf().from(element).save('MyDoc.pdf');
}

function checkGrammar() {
  alert("Grammar check coming soon! For now, use right-click for browser spelling corrections.");
}
