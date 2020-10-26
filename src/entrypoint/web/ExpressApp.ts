import { Application, default as express } from 'express';
import { ILogger } from 'src/utils';

export interface ExpressAppConfig {
  port: number;
  logger: ILogger;
  bootMsg?: string;
}

/**
 * ExpressApp is the class for managing the express application and it exposes
 * methods for the same
 */
class ExpressApp {
  private app: Application;
  private logger: ILogger;

  /**
   * Pass in all the routers to the constructor to access them
   * inside the classs
   * @param {ExpressAppConfig} config Express configuration
   */
  constructor(
    private config: ExpressAppConfig, // private testRouter: TestRouter
  ) {
    this.app = express();
    this.logger = config.logger;
  }

  /**
   * configApp configures the express application
   */
  private configApp(): void {
    // Add other middlewares here as well as routes too
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    // this.app.use(testRouter.getRouter());
  }

  /**
   * boot will configure the express application and will boot up the
   * application. It will also return the express application instance
   * @return {Application}
   */
  boot(): Application {
    if (!this.app) this.app = express();

    this.configApp();

    this.app.listen(this.config.port, () => {
      if (this.config.bootMsg) this.logger.info(this.config.bootMsg);
      else this.logger.info(`Server running on port: ${this.config.port}`);
    });

    return this.app;
  }
}

export default ExpressApp;
