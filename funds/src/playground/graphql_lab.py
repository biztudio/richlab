import graphene
'''
Step 1: Creating a basic Schema
'''
class Query(graphene.ObjectType):
    hello = graphene.String(name=graphene.String(default_value="stranger"))

    def resolve_hello(self, info, name):
        #print(info)
        return 'Hello, ' + name

schema = graphene.Schema(query=Query)

'''
Step2: Querying
'''
result = schema.execute('{ hello }')
print(result.data['hello']) # "Hello stranger"

result = schema.execute('{ hello(name:"Yang SHEN") }')
print(result.data['hello']) # "Hello Yang SHEN"
