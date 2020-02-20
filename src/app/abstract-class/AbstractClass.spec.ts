import { AbstractClass } from './AbstractClass';
import { metadataStub1 } from 'src/stubs/test-stubs/metadata1.stub';

describe('AbstractClass ', () => {
    class TestFieldClass extends AbstractClass {}
    let field: TestFieldClass;

    beforeEach(() => {
        field = new TestFieldClass();
    });
    afterEach(() => {
        field = null;
    });

    it('defined ', () => {
        expect(field).toBeDefined();
    });
    it('validationRules testing ', () => {
        expect(field.validationRules).toBeDefined();
        expect(typeof field.validationRules).toEqual('object');
        expect(field.validationRules).toEqual([]);
    });
    it('isValueChanged testing ', () => {
        expect(field.isValueChanged).toBeDefined();
        expect(typeof field.isValueChanged).toEqual('boolean');
        expect(field.isValueChanged).toEqual(false);
    });
    it('metadata testing ', () => {
        expect((<any>field).metadata).toBeUndefined();
    });
    it('attributes conteins "name" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('name');
    });
    it('attributes conteins "type" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('type');
    });
    it('attributes conteins "value" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('value');
    });
    it('attributes conteins "uneditableValue" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('uneditableValue');
    });
    it('attributes conteins "code" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('code');
    });
    it('attributes conteins "outputType" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('outputType');
    });
    it('attributes conteins "subCode" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('subCode');
    });
    it('attributes conteins "subSubCode" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('subSubCode');
    });
    it('attributes conteins "required" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('required');
    });
    it('attributes conteins "visible" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('visible');
    });
    it('attributes conteins "readonly" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('readonly');
    });
    it('attributes conteins "multiple" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('multiple');
    });
    it('attributes conteins "request" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('request');
    });
    it('attributes conteins "confirmDocs" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('confirmDocs');
    });
    it('attributes conteins "blockParameterInfo" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('blockParameterInfo');
    });
    it('attributes conteins "errorMessages" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('errorMessages');
    });
    it('attributes conteins "isSokValueChanged" ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes).toContain('isSokValueChanged');
    });
    it('attributes check lenght ', () => {
        expect(field.attributes).toBeDefined();
        expect(field.attributes.length).toEqual(20);
    });
    it('name testing ', () => {
        expect(field.name).toBeDefined();
        expect(field.name).toEqual('');
    });
    it('type testing ', () => {
        expect(field.type).toBeDefined();
        expect(field.type).toEqual('');
    });
    it('value testing ', () => {
        expect(field.value).toBeDefined();
        expect(field.value).toEqual(null);
    });
    it('code testing ', () => {
        expect(field.code).toBeDefined();
        expect(field.code).toEqual('');
    });
    it('outputType testing ', () => {
        expect(field.outputType).toBeDefined();
        expect(field.outputType).toEqual('');
    });
    it('subCode testing ', () => {
        expect(field.subCode).toBeDefined();
        expect(field.subCode).toEqual('');
    });
    it('subSubCode testing ', () => {
        expect(field.subSubCode).toBeDefined();
        expect(field.subSubCode).toEqual('');
    });
    it('required testing ', () => {
        expect(field.required).toBeDefined();
        expect(typeof field.required).toEqual('boolean');
        expect(field.required).toEqual(false);
    });
    it('visible testing ', () => {
        expect(field.visible).toBeDefined();
        expect(typeof field.visible).toEqual('boolean');
        expect(field.visible).toEqual(true);
    });
    it('readonly testing ', () => {
        expect(field.readonly).toBeDefined();
        expect(typeof field.readonly).toEqual('boolean');
        expect(field.readonly).toEqual(false);
    });
    it('multiple testing ', () => {
        expect(field.multiple).toBeDefined();
        expect(typeof field.multiple).toEqual('boolean');
        expect(field.multiple).toEqual(false);
    });
    it('dataSource testing ', () => {
        expect(field.dataSource).toBeDefined();
        expect(typeof field.dataSource).toEqual('object');
        expect(field.dataSource).toEqual(null);
    });
    it('request testing ', () => {
        expect(field.request).toBeDefined();
        expect(typeof field.request).toEqual('string');
        expect(field.request).toEqual('');
    });
    it('approvers testing ', () => {
        expect(field.approvers).toBeDefined();
        expect(typeof field.approvers).toEqual('object');
        expect(field.approvers).toEqual([]);
    });
    it('confirmDocs testing ', () => {
        expect(field.confirmDocs).toBeDefined();
        expect(typeof field.confirmDocs).toEqual('object');
        expect(field.confirmDocs).toEqual([]);
    });
    it('blockParameterInfo testing ', () => {
        expect(field.blockParameterInfo).toBeDefined();
        expect(field.blockParameterInfo).toEqual(null);
    });
    it('blocked testing ', () => {
        expect(field.blocked).toBeDefined();
        expect(typeof field.blocked).toEqual('boolean');
        expect(field.blocked).toEqual(false);
    });
    it('errorMessages testing ', () => {
        expect(field.errorMessages).toBeDefined();
        expect(typeof field.errorMessages).toEqual('object');
        expect(field.errorMessages).toEqual([]);
    });
    it('isSokValueChanged testing ', () => {
        expect(field.isSokValueChanged).toBeDefined();
        expect(typeof field.isSokValueChanged).toEqual('boolean');
        expect(field.isSokValueChanged).toEqual(false);
    });
});
