const go = (elem) => {
    window.scroll({       // 1
      top: document
      .querySelector( elem )
        .offsetTop,       // 2
      left: 0,
      behavior: 'smooth'// 3
     });
  }