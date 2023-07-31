function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var home = document.getElementById("home");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var contactContent = document.getElementById("contactContent");
    var aboutContent = document.getElementById("aboutContent");
    var homeContent = document.getElementById("homeContent");
    member.style.backgroundColor = "#f2f2f2";
    skills.style.backgroundColor = "#e6e6e6";
    contact.style.backgroundColor = "#e6e6e6";
    about.style.backgroundColor = "#e6e6e6";
    home.style.backgroundColor = "#e6e6e6";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    contactContent.style.display = "none";
    aboutContent.style.display = "none";
    homeContent.style.display = "none";
}