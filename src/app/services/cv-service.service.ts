import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  constructor() { }

  // private valueCv = new BehaviorSubject(
  //   {
  //     name: "Muhammad Laska Adief Amrullah",
  //     telp: "+628985892495",
  //     email: "laskaadief.la@gmail.com",
  //     address: "Yogyakarta, Indonesia",
  //     about: "Passionate junior front-end developer with a desire to learn and grow in a collaborative team environment.",
  //     experience: [
  //       {
  //         company: "Zettabyte Pte. Ltd",
  //         title: "Frontend Developer",
  //         location: "Yogyakarta, Indonesia",
  //         startDate: "Mon Feb 07 2022 00:00:00 GMT+0700 (Western Indonesia Time)",
  //         endDate: "Tue Feb 07 2023 00:00:00 GMT+0700 (Western Indonesia Time)",
  //         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui delectus eum, saepe, similique facere possimus commodi aperiam fugiat in dolores sed dicta ad nemo sunt? Qui enim laudantium eligendi rem autem aliquam porro facere facilis asperiores aperiam quam voluptatem quis quae expedita, libero quia voluptas exercitationem doloribus, sint nostrum.",
  //       }
  //     ],
  //     education: [
  //       {
  //         school: "University of Amikom Yogyakarta",
  //         degree: "Bachelor",
  //         field: "Informatics",
  //         grade: "3.87",
  //         startDate: "Mon Feb 07 2022 00:00:00 GMT+0700 (Western Indonesia Time)",
  //         endDate: "Tue Feb 07 2023 00:00:00 GMT+0700 (Western Indonesia Time)",
  //         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui delectus eum, saepe, similique facere possimus commodi aperiam fugiat in dolores sed dicta ad nemo sunt? Qui enim laudantium eligendi rem autem aliquam porro facere facilis asperiores aperiam quam voluptatem quis quae expedita, libero quia voluptas exercitationem doloribus, sint nostrum.",
  //       }
  //     ]
  //   }
  // );
  private valueCv = new BehaviorSubject({});
  public valuCv$ = this.valueCv.asObservable();

  setCv(data: any) {
    this.valueCv.next(data);
  }

  getCv() {
    return this.valueCv.getValue();
  }
}
