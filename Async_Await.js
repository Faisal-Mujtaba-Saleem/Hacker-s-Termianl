console.log(`Hacker's Terminal is running!`);

const hackerTerminal = document.querySelector('.hackerTerminal');

const retrieveEmailId = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

retrieveEmailId().then(
    () => {
        let emailIdToHack = prompt("Enter the email address of the person you want to hack him!");

        if (!!emailIdToHack) {

            let hackingMessages = [
                `Initializing Hacking`,
                `Reading your Files`,
                `Password files Detected`,
                `Sending all passwords and personal files to server`,
                `Cleaning up`,
                `The person with email Id emailIdToHack Hacked Successfully`,
            ]

            let _initialTimeout;
            const processHacking = async () => {
                _initialTimeout = Math.random() * 20;
                if (_initialTimeout > 1) {
                    const timeout = Math.ceil(_initialTimeout) * 1000;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(timeout);
                        }, timeout);
                    })
                } else {
                    return ('Hack failed with error code: ' + _initialTimeoutinitialTimeout);
                }
            }

            const insertHackingMessages = (message, timeout) => {
                console.log(emailIdToHack);
                const hackingMessagesLastI = hackingMessages.length - 1;
                const msgToReplace = hackingMessages[hackingMessagesLastI].replace('emailIdToHack', emailIdToHack);
                hackingMessages[hackingMessagesLastI] = msgToReplace;

                const hackingMessageContainer = document.createElement("div");
                const hackingPara = document.createElement("p");
                const dotsSpan = document.createElement("span");
                const happyHacking = document.createElement("h3");

                hackingMessageContainer.classList.add('hackingMessageContainer');
                hackingPara.classList.add('hackingPara');
                dotsSpan.classList.add('dotsSpan');
                dotsSpan.classList.add('animate-dots')
                happyHacking.classList.add('happyHacking')

                hackerTerminal.append(hackingMessageContainer);
                hackingMessageContainer.append(hackingPara);

                hackingPara.innerText = message;

                hackingPara.append(dotsSpan);

                dotsSpan.innerText = ' . . .'

                if (hackingPara.innerText === hackingMessages[0]) {
                    setTimeout(() => {
                        dotsSpan.classList.remove('animate-dots');
                    }, Math.ceil(_initialTimeout) * 1000);
                }
                else {
                    setTimeout(() => {
                        dotsSpan.classList.remove('animate-dots');

                        if (message === hackingMessages[hackingMessagesLastI]) {
                            happyHacking.innerText = "Happy Hacking!";
                            hackerTerminal.append(happyHacking);
                        }
                    }, timeout);
                }
            }

            const startHacking = async () => {
                for (const message of hackingMessages) {
                    try {
                        const timeout = await processHacking(); // Await processHacking function call
                        insertHackingMessages(message, timeout);
                    } catch (error) {
                        console.error(error);
                    }
                }
            };
            startHacking();
        } else {
            const errorMessage = document.createElement('h3');
            errorMessage.classList.add('errorMessage');
            errorMessage.innerText = "Failed to hack..."
            hackerTerminal.append(errorMessage)
        }
    }
)