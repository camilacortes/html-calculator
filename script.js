const addForm = document['add'];
const subForm = document['subtract'];
const mulForm = document['multiply'];

// addition

addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const adding1 = addForm.adding1.value;
  const adding2 = addForm.adding2.value;
  addForm.adding1.value = '';
  addForm.adding2.value = '';
  const addition = 'Your answer is : ' + (Number(adding1) + Number(adding2));
  console.log(addition);

  const h1 = document.createElement('h1');
  h1.textContent = addition;
  document.getElementById('addition').append(h1);
});

// subtract
subForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const subtracting1 = subForm.subtracting1.value;
  const subtracting2 = subForm.subtracting2.value;
  subForm.subtracting1.value = '';
  subForm.subtracting2.value = '';
  const subtracting =
    'Your answer is : ' + (Number(subtracting1) - Number(subtracting2));
  console.log(subtracting);

  const h1 = document.createElement('h1');
  h1.textContent = subtracting;
  document.getElementById('subtraction').append(h1);
});

// multiplication
mulForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const multiplying1 = mulForm.multiplying1.value;
  const multiplying2 = mulForm.multiplying2.value;
  mulForm.multiplying1.value = '';
  mulForm.multiplying2.value = '';
  const multiplying =
    'Your answer is : ' + Number(multiplying1) * Number(multiplying2);
  console.log(multiplying);

  const h1 = document.createElement('h1');
  h1.textContent = multiplying;
  document.getElementById('multiplication').append(h1);
});
