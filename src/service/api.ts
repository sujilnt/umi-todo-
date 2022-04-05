import type { ConfigurationParameters } from '@/api';
import { Configuration, TodosApi } from '@/api';

class API {
  public todos: TodosApi;

  //Todo use env variables for multiple env will change
  private static readonly CONFIG: ConfigurationParameters = {
    basePath: '',
    credentials: 'include' as RequestCredentials,
  };

  constructor() {
    const config = new Configuration(API.CONFIG);
    this.todos = new TodosApi(config);
  }
}

export default new API();
