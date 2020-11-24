/* EASIER WAY TO CREATE A LOT OF REVIEW */
class Review 
{
	 constructor (name, status, profilPicture, reviewTitle, reviewParagraph)
	 {
	 	this.name = name;
	 	this.status = status;
	 	this.profilPicture = profilPicture;
	 	this.reviewTitle = reviewTitle;
	 	this.reviewParagraph = reviewParagraph;
/*	 	this.colorBG = colorBG;
	 	this.colorText = colorText;
	 	this.size = size;*/
	 }

	 publishReview(parentClassName, colorBG, colorText, size)
	 {
	 	/* CREATION OF DOM'S ELEMENTS */
	 	let containerReview = document.createElement("div");
	 		containerReview.classList.add("container__review", "container__review--layout");
	 		containerReview.style.backgroundColor = colorBG;
	 		containerReview.style.flexGrow = size;

	 	let reviewProfil = document.createElement("div");
	 		reviewProfil.classList.add("review__profil", "review__profil--layout");

	 	let profilPicture = document.createElement("img");
	 		profilPicture.src = this.profilPicture;
	 		profilPicture.alt = "Picture of " + this.name;
	 		profilPicture.classList.add("profil__picture", "profil__picture--layout");

	 	let profilIdentity = document.createElement("div");
	 		profilIdentity.classList.add("profil__identity", "profil__identity--layout");

	 	let identityName = document.createElement("div");
	 		identityName.innerHTML = this.name;
	 		identityName.style.color = colorText;
	 		identityName.classList.add("identity__name", "identity__name--layout");

	 	let identityStatus = document.createElement("div");
	 		identityStatus.innerHTML = this.status;
	 		identityStatus.classList.add("identity__status", "identity__status--layout");
	 		identityStatus.style.color = colorText;

	 	let reviewTitle = document.createElement("p");
	 		reviewTitle.innerHTML = this.reviewTitle;
	 		reviewTitle.classList.add("review__title", "review__title--layout");
	 		reviewTitle.style.color = colorText;

	 	let reviewParagraph = document.createElement("p");
	 		reviewParagraphe.innerHTML = this.reviewParagraph;
	 		reviewParagraphe.classList.add("review__paragraphe", "review__paragraphe--layout");
	 		reviewParagraph.style.color = colorText;

	 	/* IMPLEMENTATION ON THE HTML */
	 	let parent = document.getElementsByClassName(parentClassName)[0];

	 	parent.append(containerReview);
	 		containerReview.append(reviewProfil, reviewTitle, reviewParagraph);
	 			reviewProfil.append(profilPicture, profilIdentity);
	 				profilIdentity.append(identityName, identityStatus);
	 }
}

/* OUR REVIEWS */
let reviews = [];

let name;
let status;
let title;
let text;
let colorBG;
let colorText;
let size;

	/* REVIEW 1 */
		name = 'Daniel Clifford';
		status = 'Verified Graduate';
		title = 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.';
		text = '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”';
		parent = 'left_part__top'
		colorBG = hsl(263, 55%, 52%);
		colorText = hsl(0, 0%, 81%);
		size = 1.73;
		
		reviews.push( new Review(name, status, title, text).publishReview(parent, colorBG, colorText, size);

	
  

  

  

  /*Jonathan Walters
  Verified Graduate

  The team was very supportive and kept me motivated

  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
  for a big company. This was one of the best investments I’ve made in myself. ”

  Jeanette Harmon
  Verified Graduate

  An overall wonderful and rewarding experience

  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
  while doing something I love. ”

  Patrick Abrams
  Verified Graduate

  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
  learning from their experiences was easy.

  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”

  Kira Whittle
  Verified Graduate

  Such a life-changing experience. Highly recommended!

  “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”*/