// import { ComponentFixture, TestBed, async } from "@angular/core/testing";
// import { Plant } from './plant';
// import { Comment} from './comment';
// import { NavigatorComponent } from "./navigator.component";
// import { PlantSummaryComponent } from "./plant-summary.component";
// import { PlantSummaryService} from "./plant-summary.service";
// import { Observable } from "rxjs";
// import { PipeModule } from "../../pipe.module";
//
// describe("Plant Summary component", () => {
//
//     let plantSummary: PlantSummaryComponent;
//     let fixture: ComponentFixture<PlantSummaryComponent>;
//
//     let plantSummaryServiceStub: {
//         getComments: (id: string) => Observable<Comment[]>
//     };
//
//     beforeEach(() => {
//         // stub PlantSummaryService for test purposes
//         plantSummaryServiceStub = {
//             getComments: (id: string) => Observable.of([
//                 {
//                     _id: "_id1",
//                     commentOnObjectId: "ObjId1",
//                     comment: "This is a comment."
//                 },
//                 {
//                     _id: "_id2",
//                     commentOnObjectId: "ObjId2",
//                     comment: "This is a comment."
//                 },
//                 {
//                     _id: "_id3",
//                     commentOnObjectId: "ObjId3",
//                     comment: "This is a comment."
//                 }
//             ])
//         };
//
//         TestBed.configureTestingModule({
//             imports: [PipeModule],
//             declarations: [ NavigatorComponent, PlantSummaryComponent ],
//             // providers:    [ NavigatorService ]  // NO! Don't provide the real service!
//             // Provide a test-double instead
//             providers:    [ { provide: PlantSummaryService, useValue: plantSummaryServiceStub } ]
//         })
//     });
//
//     beforeEach(async(() => {
//         TestBed.compileComponents().then(() => {
//             fixture = TestBed.createComponent(PlantSummaryComponent);
//             plantSummary = fixture.componentInstance;
//             fixture.detectChanges();
//         });
//     }));
//
//     it("contains all the comments", () => {
//         expect(plantSummary.comments.length).toEqual(3);
//     });
//     it("contains a comment which has an id '_id3'", () => {
//         expect(plantSummary.comments.some((comment: Comment) => comment._id === "_id3" )).toBe(true);
//     });
//
//     it("contain a comment which has an ObjectId '_id2'", () => {
//         expect(plantSummary.comments.some((comment: Comment) => comment.commentOnObjectId === "commonName" )).toBe(true);
//     });
//
//     it("doesn't contain a comment which has an ObjectId 'ObjId3'", () => {
//         expect(plantSummary.comments.some((comment: Comment) => comment.commentOnObjectId === "Santa" )).toBe(false);
//     });
//
//     it("has three comments that are 'This is a comment.", () => {
//         expect(plantSummary.comments.filter((comment: Comment) => comment.comment === "This is a comment.").length).toBe(3);
//     });
// });