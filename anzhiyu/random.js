var posts=["2024/05/20/520/","2024/03/27/新的开始/","2024/03/27/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };