import mailgen from 'mailgen';

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: 'Welcome to projectCamp',
      action: {
        instructions:
          'To verify your email please click on the following button',
        button: {
          color: '#22BC66',
          text: 'verify your email',
          link: verificationUrl,
        },
      },
      outro: 'need help ,or have questions ? Just Reply to this email ',
    },
  };
};

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: 'We got request to reset the password of your account ',
      action: {
        instructions: 'To reset your password click on the button ',
        button: {
          color: '#22BC66',
          text: 'Reset Password ',
          link: passwordResetUrl,
        },
      },
      outro: 'need help ,or have questions ? Just Reply to this email ',
    },
  };
};

export { forgotPasswordMailGenContent, emailVerificationMailGenContent };
