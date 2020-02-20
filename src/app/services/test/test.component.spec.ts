import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestService } from '../services/test.service';

describe('TestComponent 1', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      providers: [ TestService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test', () => {
    const res = component.testMethod();
    expect(res).toBeDefined();
    expect(res).toEqual('some-value anover value');
  });
});

xdescribe('TestComponent 2', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    const fake = {
        getValue() {
            return 'Fake!';
        }
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ TestComponent ],
        providers: [
            { provide: TestService, useValue: fake}
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('test', () => {
      const res = component.testMethod();
      expect(res).toBeDefined();
      expect(res).toEqual('Fake! anover value');
    });
});
xdescribe('TestComponent 3', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    class FakeClass {
        getValue() {
            return 'Fake!!';
        }
    }

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ TestComponent ],
        providers: [
            { provide: TestService, useClass: FakeClass}
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('test', () => {
      const res = component.testMethod();
      expect(res).toBeDefined();
      expect(res).toEqual('Fake!! anover value');
    });
});
