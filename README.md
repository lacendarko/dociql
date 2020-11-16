## Usage

### Install DociQL:

```bash
yarn
```

```bash
yarn build
```

a new folder <public> should appear. Open the html inside that folder, it contains the docs.

every change made to config.yml will appera in the html after "yarn build" is run.

### Define `config.yml` template to help generate beautiful docs:

```yml
# To fetch schema from
introspection: https://url-to-you-graphql-endpoint
token: 123123asd
servers: # same format as for OpenAPI Specification
  - url: https://dev-server.com
    description: Dev
  - url: https://prod-server.com
    description: Prod
    ...

info: # same format as for OpenAPI Specification
    title: Your API Title
    description: Markdown enabled description of your api.
    ...

 # define your domains by providing a set of usecases
domains:
  - name: Top Level Menu Section # Name of the domain
    description: Description  # Description of the domain
    usecases:
     - name: Fetch 'Some' field # Operation name
       description: Markdown enabled description for operation # Opearation description
       query: query.some # Query example - fetching single field
       select: field1 field2 # select only specific sub fields. By default - all are selected
       expand: field3(sub1, sub2, sub3),field4 # go deep by expanding specific fields.
     - name: Invoke Mutation # Mutation
       description: Markdown enabled description for operation
       query: mutation.mutateSome # Mutation example - invoke mutation
```
