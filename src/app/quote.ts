 export class Quote {
     public showDescription:boolean;
     constructor(public id:number, public name:string,public description:string,  public upVote:number,  public downVote:number, public postDate:Date){
        this.showDescription=false
     }

}
