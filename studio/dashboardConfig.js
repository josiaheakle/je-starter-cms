export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617d8eee6961c5219c72bcf9',
                  title: 'Sanity Studio',
                  name: 'je-starter-cms-studio',
                  apiId: '9f00d10d-8c10-45f9-bc94-7574a1d4bf6f'
                },
                {
                  buildHookId: '617d8eee6ee0ab4e6e178a24',
                  title: 'Portfolio Website',
                  name: 'je-starter-cms',
                  apiId: '04d2e25b-dd25-46fe-ad95-6dd04f5f5d35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josiaheakle/je-starter-cms',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://je-starter-cms.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
