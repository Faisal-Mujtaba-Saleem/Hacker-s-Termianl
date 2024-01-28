console.log(`Hacker's Terminal is running!`);

const hackerTerminal = document.querySelector('.hackerTerminal');
const hackingMessages = [
    `Initializing Hacking`,
    `Reading your Files`,
    `Password files Detected`,
    `Sending all passwords and personal files to server`,
    `Cleaning up`
]

const initialTimeout = Math.random() * 20;

const processHacking = () => {
    return new Promise((resolve, reject) => {
        if (initialTimeout > 0) {
            const timeout = Math.ceil(initialTimeout) * 1000;

            setTimeout(() => {
                resolve(timeout);
            }, timeout);
        } else {
            reject('Hack failed with error code: ', randomNumber);
        }
    })
}

const insertHackingMessages = (message, timeout) => {
    const hackingPara = document.createElement("p");
    const dotsSpan = document.createElement("span");

    hackingPara.classList.add('hackingPara');
    dotsSpan.classList.add('dotsSpan');

    hackerTerminal.append(hackingPara);

    hackingPara.innerText = message;

    hackingPara.append(dotsSpan);

    let interval1 = setInterval(() => {
        dotsSpan.innerText += ' .';
    }, 1500);

    let interval2 = setInterval(() => {
        if (dotsSpan.innerText.split(" ").length > 3) {
            dotsSpan.innerText = '.';
        }
    }, 1000);

    if (hackingPara.innerText === hackingMessages[0]) {
        setTimeout(() => {
            clearInterval(interval1);
            clearInterval(interval2);
        }, Math.ceil(initialTimeout) * 1000);
    }
    else {
        setTimeout(() => {
            clearInterval(interval1);
            clearInterval(interval2);
        }, timeout);
    }
    return processHacking();
}

function startHacking() {
    let promise = Promise.resolve();
    hackingMessages.forEach(message => {
        promise = promise.then((timeout) => {
            return insertHackingMessages(message, timeout);
        });
        // processHacking().then(() => {
        //     insertHackingMessages(message);
        // });
    })
}
startHacking()