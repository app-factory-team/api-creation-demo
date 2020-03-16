import React from 'react'
import { repository } from '../../package.json'

export default () => (
  <footer>
    <div>This application is just for demonstration purposes, all data is fictional.</div>
    <div>
      For more information visit the&nbsp;
      <a href={repository.url.replace('.git', '')}>Github repository</a>
    </div>
  </footer>
)
