开发笔记
---

GraphQL:

* GraphQL 是一个用于 API 的**查询**语言，是一个使用基于类型系统来执行查询的服务端运行时（类型系统由你的数据定义）。
* **GraphQL 查询能够遍历相关对象及其字段，使得客户端可以一次请求查询大量相关数据 ( 比如一个数组 )，而不像传统 REST 架构中那样需要多次往返查询**。
* 在类似 REST 的系统中，只能传递一组简单参数 —— 请求中的 query 参数和 URL 段。但是在 GraphQL 中，每一个字段和嵌套对象都能有自己的一组参数，从而使得 GraphQL 可以完美替代多次 API 获取请求。
* 一个 GraphQL 服务是通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数。
* GraphQL 是关于请求对象上的特定字段. 查询和其结果拥有几乎一样的结构, 服务器也准确地知道客户端请求的字段.
* 查询是可交互的, 也就是你可以按你喜欢来改变查询，然后得到新的结果。
* GraphQL in Python: [Graphene](http://graphene-python.org/)
* GraphQL with Flask + SQLAlchemy: [Tutorial](http://docs.graphene-python.org/projects/sqlalchemy/en/latest/)
* GraphQL Client with Vue: [Appollo Client](https://www.howtographql.com/vue-apollo/1-getting-started/)
