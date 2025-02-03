export class Professional {
    
    id;
    name;
    age;
    weight;
    height;
    isRetired;
    nationality;
    oscarsNumber;
    profession;

    constructor(id, name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.isRetired = isRetired;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profession = profession;
    }

    showProfessional() {
        return {
            name: this.name,
            age: this.age,
            weight: this.weight,
            height: this.height,
            retired: this.isRetired,
            nationality: this.nationality,
            oscars: this.oscarsNumber,
            profession: this.profession,
        }
    }
  }