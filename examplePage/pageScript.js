const cepInput = document.getElementById('cepHolder')
const streetInput = document.getElementById('streetHolder')
const neighborhood = document.getElementById('neighborhood')
const cityInput = document.getElementById('cityHolder')
const stateInput = document.getElementById('stateHolder')

function dataFill (data) {
  if (data.erro) {
 return alert('CEP não encontrado') 
}
  streetInput.value = data.logradouro;
  neighborhood.value = data.bairro;
  cityInput.value = data.localidade;
  stateInput.value = data.uf;
  return ''
}

function cepSearch({target}) {
  try {
  const {value} = target
  const regex = /[0-9]{5}-[\d]{3}/u
  const cepPattern = value.match(regex)
    if (cepPattern[0] !== null) {
      const cep = cepPattern[0].replace(/\D/u, '')
      fetch(`https://viacep.com.br/ws/${cep}/json/`).
      then(response => response.json()).
      then(data => {
        dataFill(data)
    })
    }
  return '';
  } catch (e) {
    return '';
  }
}

cepInput.addEventListener('input', e => cepSearch(e))

