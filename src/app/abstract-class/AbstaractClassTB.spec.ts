import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AbstractClass } from './AbstractClass';
import { metadataStub1 } from 'src/stubs/test-stubs/metadata1.stub';

@Component({
    template: '<p>TestFieldComponent</p>'
})

class TestFieldComponent extends AbstractClass {}

describe('AbstractClass TB ', () => {
    let component: TestFieldComponent;
    let fixture: ComponentFixture<TestFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
            ],
            declarations: [
                TestFieldComponent
            ]
        })
            /**
             * Compile template and css
             */
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        expect(fixture).toBeDefined();
        expect(component).toBeDefined();
    });
    it('validationRules testing ', () => {
        expect(component.validationRules).toBeDefined();
        expect(typeof component.validationRules).toEqual('object');
        expect(component.validationRules).toEqual([]);
    });
    it('isValueChanged testing ', () => {
        expect(component.isValueChanged).toBeDefined();
        expect(typeof component.isValueChanged).toEqual('boolean');
        expect(component.isValueChanged).toEqual(false);
    });
    it('metadata testing ', () => {
        expect((<any>component).metadata).toBeUndefined();
    });
    it('attributes conteins "name" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('name');
    });
    it('attributes conteins "type" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('type');
    });
    it('attributes conteins "value" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('value');
    });
    it('attributes conteins "uneditableValue" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('uneditableValue');
    });
    it('attributes conteins "code" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('code');
    });
    it('attributes conteins "outputType" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('outputType');
    });
    it('attributes conteins "subCode" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('subCode');
    });
    it('attributes conteins "subSubCode" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('subSubCode');
    });
    it('attributes conteins "required" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('required');
    });
    it('attributes conteins "visible" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('visible');
    });
    it('attributes conteins "readonly" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('readonly');
    });
    it('attributes conteins "multiple" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('multiple');
    });
    it('attributes conteins "request" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('request');
    });
    it('attributes conteins "confirmDocs" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('confirmDocs');
    });
    it('attributes conteins "blockParameterInfo" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('blockParameterInfo');
    });
    it('attributes conteins "errorMessages" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('errorMessages');
    });
    it('attributes conteins "isSokValueChanged" ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes).toContain('isSokValueChanged');
    });
    it('attributes check lenght ', () => {
        expect(component.attributes).toBeDefined();
        expect(component.attributes.length).toEqual(20);
    });
    it('name testing ', () => {
        expect(component.name).toBeDefined();
        expect(component.name).toEqual('');
    });
    it('type testing ', () => {
        expect(component.type).toBeDefined();
        expect(component.type).toEqual('');
    });
    it('value testing ', () => {
        expect(component.value).toBeDefined();
        expect(component.value).toEqual(null);
    });
    it('code testing ', () => {
        expect(component.code).toBeDefined();
        expect(component.code).toEqual('');
    });
    it('outputType testing ', () => {
        expect(component.outputType).toBeDefined();
        expect(component.outputType).toEqual('');
    });
    it('subCode testing ', () => {
        expect(component.subCode).toBeDefined();
        expect(component.subCode).toEqual('');
    });
    it('subSubCode testing ', () => {
        expect(component.subSubCode).toBeDefined();
        expect(component.subSubCode).toEqual('');
    });
    it('required testing ', () => {
        expect(component.required).toBeDefined();
        expect(typeof component.required).toEqual('boolean');
        expect(component.required).toEqual(false);
    });
    it('visible testing ', () => {
        expect(component.visible).toBeDefined();
        expect(typeof component.visible).toEqual('boolean');
        expect(component.visible).toEqual(true);
    });
    it('readonly testing ', () => {
        expect(component.readonly).toBeDefined();
        expect(typeof component.readonly).toEqual('boolean');
        expect(component.readonly).toEqual(false);
    });
    it('multiple testing ', () => {
        expect(component.multiple).toBeDefined();
        expect(typeof component.multiple).toEqual('boolean');
        expect(component.multiple).toEqual(false);
    });
    it('dataSource testing ', () => {
        expect(component.dataSource).toBeDefined();
        expect(typeof component.dataSource).toEqual('object');
        expect(component.dataSource).toEqual(null);
    });
    it('request testing ', () => {
        expect(component.request).toBeDefined();
        expect(typeof component.request).toEqual('string');
        expect(component.request).toEqual('');
    });
    it('approvers testing ', () => {
        expect(component.approvers).toBeDefined();
        expect(typeof component.approvers).toEqual('object');
        expect(component.approvers).toEqual([]);
    });
    it('confirmDocs testing ', () => {
        expect(component.confirmDocs).toBeDefined();
        expect(typeof component.confirmDocs).toEqual('object');
        expect(component.confirmDocs).toEqual([]);
    });
    it('blockParameterInfo testing ', () => {
        expect(component.blockParameterInfo).toBeDefined();
        expect(component.blockParameterInfo).toEqual(null);
    });
    it('blocked testing ', () => {
        expect(component.blocked).toBeDefined();
        expect(typeof component.blocked).toEqual('boolean');
        expect(component.blocked).toEqual(false);
    });
    it('errorMessages testing ', () => {
        expect(component.errorMessages).toBeDefined();
        expect(typeof component.errorMessages).toEqual('object');
        expect(component.errorMessages).toEqual([]);
    });
    it('isSokValueChanged testing ', () => {
        expect(component.isSokValueChanged).toBeDefined();
        expect(typeof component.isSokValueChanged).toEqual('boolean');
        expect(component.isSokValueChanged).toEqual(false);
    });
});
