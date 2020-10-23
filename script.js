function addusers()
{
user1=document.getElementById("player_1_username").value;
user2=document.getElementById("player_2_username").value;
localStorage.setItem("user_1",user1);
localStorage.setItem("user_2",user2);
window.location="quiz.html";
}
