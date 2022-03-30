window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

const time = 300;

function findId() {
    const userName = document.getElementsByName('userName')[0].value;
    const idEmail = document.getElementsByName('idEmail')[0].value;
    const phoneNumber = document.getElementsByName('phoneNumber')[0].value;

    if (userNameValidation(userName) && idEmailValidation(idEmail) && phoneNumberValidation(phoneNumber)) {
        // axios
        // alert('회원 정보가 존재하지 않습니다.');
        idSuccess();
    }

}

function userNameValidation(userName) {
    return userName.length == 0 ? alert('이름을 입력해주세요.') : true;
}

function idEmailValidation(idEmail) {
    return idEmail.length == 0 ? alert('이메일을 입력해주세요.') : true;
}

function phoneNumberValidation(phoneNumber) {
    return phoneNumber.length == 0 ? alert('전화번호를 입력해주세요.') : true;
}

function idSuccess() {
    document.getElementById('idSuccess').classList.remove('none');
}

function viewAll() { // 아이디 받도록 변경도 괜찮아요
    document.getElementById('staticId').textContent = 'coals0329'; // const userId
    document.getElementById('viewAll').setAttribute('class', 'none');
}

function findPw() {
    const id = document.getElementsByName('id')[0].value;
    const pwEmail = document.getElementsByName('pwEmail')[0].value;
    const timeDisplay = document.getElementById('time');

    if (idValidation(id) && pwEmailValidation(pwEmail)) {
        // aixos
        alert('인증 메일을 전송하였습니다.');
        startTimer(time, timeDisplay);
    }
}

function idValidation(id) {
    return id.length == 0 ? alert('아이디를 입력해주세요.') : true;
}

function pwEmailValidation(pwEmail) {
    return pwEmail.length == 0 ? alert('이메일을 입력해주세요.') : true;
}

function startTimer(count, display) {  
    const sendMail = document.getElementById('sendMail');
    let minutes, seconds;

    sendMail.setAttribute('class', '');
    timer = setInterval(function () {
        minutes = parseInt(count / 60, 10);
        seconds = parseInt(count % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--count < 0) {
            clearInterval(timer);
            setTimeElement(display, sendMail);
            isRunning = false;
        }
    }, 1000);
    isRunning = true;
}

function setTimeElement(display, sendMail) {
    alert("인증 시간이 초과되었습니다. 다시 시도해주세요.");
    display.textContent = '05:00';
    sendMail.setAttribute('class', 'none');
}

function checkCertification() {
    const certification = document.getElementsByName('certification')[0].value;

    if (certificationValidation(certification)) {
        // axios
        alert('인증되었습니다.');
        // 일치하면 마이페이지 이동 후 > 비밀번호 변경 안내 alert
    }

}

function certificationValidation(certification) {
    return certification.length == 0 ? alert('인증번호를 입력해주세요.') : true;
}