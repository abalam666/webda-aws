import { WebdaTest } from "webda/lib/test";
import { test, suite } from "mocha-typescript";
import * as assert from "assert";
import { LambdaCaller } from "./lambdacaller";

@suite
class LambdaCallerTest extends WebdaTest {
  @test
  async call() {
    // CodeCoverage test
    const lamdaCaller = new LambdaCaller("plop", {});
    assert.throws(() => new LambdaCaller());
    new LambdaCaller("arn", {
      accessKeyId: "PLOP"
    });
    await this.assertThrowsAsync(
      lamdaCaller.execute.bind(LambdaCaller, undefined, true)
    );
  }
}
