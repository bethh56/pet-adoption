const pets = [
    {
        Image: 'https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
        Name: 'Max',
        Color: 'Color: Golden Brown',
        skill: 'Skill: Playing with a tennis ball',
        type: 'Dog'
    },
    {
      Image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cat_weight_ref_guide/1800x1200_cat_weight_ref_guide.jpg',
      Name: 'Spencer',
      Color: 'Color: Dark Brown and White',
      skill: 'Skill: Avoiding contact with all humans unless hungry',
      type: 'Cat' 
    },
    {
        Image: 'https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_000044061370_Medium-fa5f8aa.jpg?quality=45&crop=5px,17px,929px,400px&resize=960,413',
        Name: 'Clarence',
        Color: 'Color: Orange',
        skill: 'Skill: Bringing new friends in from outside',
        type: 'Cat' 
      },
      {
        Image: 'data:image/jpeg;base64,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',
        Name: 'Spike',
        Color: 'Color: Dark Green',
        skill: 'Skill: Knocking down anything in the way',
        type: 'Dino' 
      },
      {
        Image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MonolophosaurusHiRes_usl6ti.jpg',
        Name: 'Frank',
        Color: 'Color: Green',
        skill: 'Skill: Eating',
        type: 'Dino' 
      },
      {
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAclhVC7gbhlRQOYDDcxQpjCH0_0aI0BIftb1X0JixabN0-KuSg&s',
        Name: 'Hamilton',
        Color: 'Color: Black',
        skill: 'Skill: Catching mice',
        type: 'Cat' 
      },
      {
        Image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WALN4MAIT4I6VLRIPUMJQAJIME.jpg&w=767',
        Name: 'Dexter',
        Color: 'Color: Gray, hairless',
        skill: 'Skill: Cuddling up to stay warm',
        type: 'Cat' 
      },
      {
        Image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
        Name: 'Ralph',
        Color: 'Color: Brown',
        skill: 'Skill: Going to the park',
        type: 'Dog' 
      },
      {
        Image: 'https://static01.nyt.com/images/2020/01/13/well/nightmaredog1/nightmaredog1-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        Name: 'Matilda',
        Color: 'Color: Black & White',
        skill: 'Skill: Trying to steal food off your plate',
        type: 'Dog' 
      },
      {
        Image: 'data:image/jpeg;base64,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',
        Name: 'Alex',
        Color: 'Color: Dark Green',
        skill: 'Skill: Being the loudest dino in the neighborhood',
        type: 'Dino' 
      },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = () => {
    let domString = '';
    for (let i = 0; i < pets.length; i++) {
        domString += `<div id="petInfo">`;
        domString += `<header class="petName"><h2>${pets[i].Name}</h2></header>`;
        domString += `<section class="petFacts">`
        domString += `<img src="${pets[i].Image}"/>`;
        domString += `<h4 class="petColor">${pets[i].Color}</h4>`;
        domString += `<h4 class="petSkill">${pets[i].skill}</h4>`;
        domString += `</section>`
        domString += `<footer class="animalType"><h3>${pets[i].type}</h3></footer>`;
        domString += `</div>`;
    }
    printToDom('pets', domString);
}

buildPetCards();

const dogButton = document.createElement('button');dogButton.innerHTML = "Dogs";
document.button.appendChild(dogButton);

const catButton = document.createElement('button');
catButton.innerHTML = "Cats";
document.button.appendChild(catButton);

const dinoButton = document.createElement('button');
dinoButton.innerHTML = "Dino";
document.button.appendChild(dinoButton);


