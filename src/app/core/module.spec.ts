import { CoreModule } from './module';

describe('Module.TsModule', () => {
  let moduleTsModule: CoreModule;

  beforeEach(() => {
    moduleTsModule = new CoreModule();
  });

  it('should create an instance', () => {
    expect(CoreModule).toBeTruthy();
  });
});
