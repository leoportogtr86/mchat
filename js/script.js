console.log('hello world')

let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')
let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')
let q10 = document.querySelector('#q10')
let q11 = document.querySelector('#q11')
let q12 = document.querySelector('#q12')
let q13 = document.querySelector('#q13')
let q14 = document.querySelector('#q14')
let q15 = document.querySelector('#q15')
let q16 = document.querySelector('#q16')
let q17 = document.querySelector('#q17')
let q18 = document.querySelector('#q18')
let q19 = document.querySelector('#q19')
let q20 = document.querySelector('#q20')
let risco = document.querySelector('#risco')

let score = document.querySelector('#score')
let pontos = document.querySelector('#pontos')

let q1Next = document.querySelector('#q1Next')
let q2Next = document.querySelector('#q2Next')
let q3Next = document.querySelector('#q3Next')
let q4Next = document.querySelector('#q4Next')
let q5Next = document.querySelector('#q5Next')
let q6Next = document.querySelector('#q6Next')
let q7Next = document.querySelector('#q7Next')
let q8Next = document.querySelector('#q8Next')
let q9Next = document.querySelector('#q9Next')
let q10Next = document.querySelector('#q10Next')
let q11Next = document.querySelector('#q11Next')
let q12Next = document.querySelector('#q12Next')
let q13Next = document.querySelector('#q13Next')
let q14Next = document.querySelector('#q14Next')
let q15Next = document.querySelector('#q15Next')
let q16Next = document.querySelector('#q16Next')
let q17Next = document.querySelector('#q17Next')
let q18Next = document.querySelector('#q18Next')
let q19Next = document.querySelector('#q19Next')
let q20Next = document.querySelector('#q20Next')

let card1 = document.querySelector('#card1')
let card2 = document.querySelector('#card2')
let card3 = document.querySelector('#card3')
let card4 = document.querySelector('#card4')
let card5 = document.querySelector('#card5')
let card6 = document.querySelector('#card6')
let card7 = document.querySelector('#card7')
let card8 = document.querySelector('#card8')
let card9 = document.querySelector('#card9')
let card10 = document.querySelector('#card10')
let card11 = document.querySelector('#card11')
let card12 = document.querySelector('#card12')
let card13 = document.querySelector('#card13')
let card14 = document.querySelector('#card14')
let card15 = document.querySelector('#card15')
let card16 = document.querySelector('#card16')
let card17 = document.querySelector('#card17')
let card18 = document.querySelector('#card18')
let card19 = document.querySelector('#card19')
let card20 = document.querySelector('#card20')

let nome_cri = document.querySelector('#nome_cri')
let idade = document.querySelector('#idade')
let nome_resp = document.querySelector('#nome_resp')
let iniciar = document.querySelector('#iniciar')

let form = document.querySelector('#form')


iniciar.onclick = function () {

    console.log(nome_cri.value)
    console.log(idade.value)
    console.log(nome_resp.value)
    form.style.display = 'none'
    card1.style.display = 'block'

    axios.post('https://questionariomchat.herokuapp.com/salvar', {

        nome_crianca: nome_cri.value,
        idade_crianca: idade.value,
        nome_responsavel: nome_resp.value


    })
    
}

let sim = 0
let nao = 0


q2.onclick = function () {

    sim += 1
    

    console.log('Sim => ' + sim)

    card2.style.display = 'none'
    card3.style.display = 'block'
    
    
    
}


q5.onclick = function () {

    sim += 1

    console.log('Sim => ' + sim)

    card5.style.display = 'none'
    card6.style.display = 'block'
    
    
    
}


q12.onclick = function () {

    sim += 1

    console.log('Sim => ' + sim)

    card12.style.display = 'none'
    card13.style.display = 'block'
    
    
    
}
//-----------------------------------------------------------

q1.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card1.style.display = 'none'
    card2.style.display = 'block'
    
    
    
}


q3.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card3.style.display = 'none'
    card4.style.display = 'block'
    
    
    
}


q4.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card4.style.display = 'none'
    card5.style.display = 'block'
    
    
    
}


q6.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card6.style.display = 'none'
    card7.style.display = 'block'
    
    
    
}


q7.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card7.style.display = 'none'
    card8.style.display = 'block'
    
    
    
}


q8.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card8.style.display = 'none'
    card9.style.display = 'block'
    
    
    
}


q9.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card9.style.display = 'none'
    card10.style.display = 'block'
    
    
    
}


q10.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card10.style.display = 'none'
    card11.style.display = 'block'
    
    
    
}


q11.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card11.style.display = 'none'
    card12.style.display = 'block'
    
    
    
}


q13.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card13.style.display = 'none'
    card14.style.display = 'block'
    
    
    
}


q14.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card14.style.display = 'none'
    card15.style.display = 'block'
    
    
    
}


q15.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card15.style.display = 'none'
    card16.style.display = 'block'
    
    
    
}


q16.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card16.style.display = 'none'
    card17.style.display = 'block'
    
    
    
}


q17.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card17.style.display = 'none'
    card18.style.display = 'block'
    
    
    
}


q18.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card18.style.display = 'none'
    card19.style.display = 'block'
    
    
    
}


q19.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    card19.style.display = 'none'
    card20.style.display = 'block'
    
    
    
}


q20.onclick = function () {

    nao += 1

    console.log('Não => ' + nao)

    console.log(sim + nao)
    card20.style.display = 'none'
    score.style.display = 'block'

    pontos.innerHTML = sim + nao

    if ((sim + nao) <= 2){

        risco.innerHTML = 'Baixo risco. Se a criança tiver menos de 24 meses, repetir o teste aos 24 meses. Não é necessário nenhuma outra medida a não ser que a observação indique risco do transtorno do espectro autista.'
        score.classList.add('alert-success')


    } else if ((sim + nao) > 2 && (sim + nao) <= 7){

        risco.innerHTML = 'Risco moderado. Administrar entrevista de segmento para conseguir informações adicionais sobre as respostas de risco.Procure um profissional capacidado para lhe orientar.'
        score.classList.add('alert-warning')


    } else if ((sim + nao) > 7 && (sim + nao) <= 20){

        risco.innerHTML = 'Alto risco. Encaminhar para uma avaliação de diagnóstico e possível sinalização para intervenção precoce.'
        score.classList.add('alert-danger')


    }
    

    
}

//-------------------------------------

q1Next.onclick = function () {

    card1.style.display = 'none'
    card2.style.display = 'block'
    
}




q2Next.onclick = function () {

    card2.style.display = 'none'
    card3.style.display = 'block'
    
}


q2.onclick = function () {

    card2.style.display = 'none'
    card3.style.display = 'block'
    
}


q3Next.onclick = function () {

    card3.style.display = 'none'
    card4.style.display = 'block'
    
}


q3.onclick = function () {

    card3.style.display = 'none'
    card4.style.display = 'block'
    
}


q4Next.onclick = function () {

    card4.style.display = 'none'
    card5.style.display = 'block'
    
}


q4.onclick = function () {

    card4.style.display = 'none'
    card5.style.display = 'block'
    
}


q5Next.onclick = function () {

    card5.style.display = 'none'
    card6.style.display = 'block'
    
}


q5.onclick = function () {

    card5.style.display = 'none'
    card6.style.display = 'block'
    
}


q6Next.onclick = function () {

    card6.style.display = 'none'
    card7.style.display = 'block'
    
}



q7Next.onclick = function () {

    card7.style.display = 'none'
    card8.style.display = 'block'
    
}


q8Next.onclick = function () {

    card8.style.display = 'none'
    card9.style.display = 'block'
    
}


q9Next.onclick = function () {

    card9.style.display = 'none'
    card10.style.display = 'block'
    
}


q10Next.onclick = function () {

    card10.style.display = 'none'
    card11.style.display = 'block'
    
}


q11Next.onclick = function () {

    card11.style.display = 'none'
    card12.style.display = 'block'
    
}


q12Next.onclick = function () {

    card12.style.display = 'none'
    card13.style.display = 'block'
    
}


q13Next.onclick = function () {

    card13.style.display = 'none'
    card14.style.display = 'block'
    
}


q14Next.onclick = function () {

    card14.style.display = 'none'
    card15.style.display = 'block'
    
}


q15Next.onclick = function () {

    card15.style.display = 'none'
    card16.style.display = 'block'
    
}


q16Next.onclick = function () {

    card16.style.display = 'none'
    card17.style.display = 'block'
    
}


q17Next.onclick = function () {

    card17.style.display = 'none'
    card18.style.display = 'block'
    
}


q18Next.onclick = function () {

    card18.style.display = 'none'
    card19.style.display = 'block'
    
}


q19Next.onclick = function () {

    card19.style.display = 'none'
    card20.style.display = 'block'
    
}


q20Next.onclick = function () {

    card20.style.display = 'none'
    score.style.display = 'block'
    pontos.innerHTML = sim + nao

    if ((sim + nao) <= 2){

        risco.innerHTML = 'Baixo risco. Se a criança tiver menos de 24 meses, repetir o teste aos 24 meses. Não é necessário nenhuma outra medida a não ser que a observação indique risco do transtorno do espectro autista.'
        score.classList.add('alert-success')


    } else if ((sim + nao) > 2 && (sim + nao) <= 7){

        risco.innerHTML = 'Risco moderado. Administrar entrevista de segmento para conseguir informações adicionais sobre as respostas de risco.Procure um profissional capacidado para lhe orientar.'
        score.classList.add('alert-warning')


    } else if ((sim + nao) > 7 && (sim + nao) <= 20){

        risco.innerHTML = 'Alto risco. Encaminhar para uma avaliação de diagnóstico e possível sinalização para intervenção precoce.'
        score.classList.add('alert-danger')


    }
    
}



