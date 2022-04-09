/**
 * @fileoverview Tests for naming util
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { assert } from "chai";

import * as naming from "../../../lib/shared/naming.js";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("naming", () => {
    describe("normalizePackageName()", () => {

        [
            ["foo", "ec0lint-config-foo"],
            ["ec0lint-config-foo", "ec0lint-config-foo"],
            ["@z/foo", "@z/ec0lint-config-foo"],
            ["@z\\foo", "@z/ec0lint-config-foo"],
            ["@z\\foo\\bar.js", "@z/ec0lint-config-foo/bar.js"],
            ["@z/ec0lint-config", "@z/ec0lint-config"],
            ["@z/ec0lint-config-foo", "@z/ec0lint-config-foo"]
        ].forEach(([input, expected]) => {
            it(`should return ${expected} when passed ${input}`, () => {
                const result = naming.normalizePackageName(input, "ec0lint-config");

                assert.strictEqual(result, expected);
            });
        });

    });

    describe("getShorthandName()", () => {

        [
            ["foo", "foo"],
            ["ec0lint-config-foo", "foo"],
            ["@z", "@z"],
            ["@z/ec0lint-config", "@z"],
            ["@z/foo", "@z/foo"],
            ["@z/ec0lint-config-foo", "@z/foo"]
        ].forEach(([input, expected]) => {
            it(`should return ${expected} when passed ${input}`, () => {
                const result = naming.getShorthandName(input, "ec0lint-config");

                assert.strictEqual(result, expected);
            });
        });

    });

    describe("getNamespaceFromTerm()", () => {
        it("should remove namespace when passed with namespace", () => {
            const namespace = naming.getNamespaceFromTerm("@namespace/eslint-plugin-test");

            assert.strictEqual(namespace, "@namespace/");
        });
    });
});
