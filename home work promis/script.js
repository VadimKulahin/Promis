function countdown(seconds) {
    return new Promise((resolve, reject) => {
      let count = seconds;
  
      const timer = setInterval(() => {
        console.log(count);
  
        count--;
  
        if (count < 0) {
          clearInterval(timer);
          resolve();
        }
      }, 1000);
    });
  }
  
  countdown(10)
    .then(() => {
      console.log('The countdown is over!');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  